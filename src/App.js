import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { useEffect, useState } from "react";
import PikachuLogo from "./pikachu.svg";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=600offset=0&")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  }, []);

  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link
            className="flex gap-4 transform transition hover:scale-105"
            to="/"
          >
            <img className="h-12" src={PikachuLogo}></img>
            <header className="text-4xl font-bold text-yellow-500">
              Pokemon Picker
            </header>
          </Link>
        </div>

        <div className="w-full flex justify-center">
          <input
            type="text"
            placeholder="  Enter Pokemon here"
            className="mt-10 p-2 w-10/12 md:w-6/12 bg-white ring-1 ring-yellow-300 rounded-lg placeholder-gray-400 text-gray-900 appearance-none shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
          ></input>
        </div>
      </div>

      <Switch>
        <Route path="/about/:slug">
          <About></About>
        </Route>
        <Route exact path="/">
          {pokemon && <Home prop={pokemon.results} />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
