import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    document.title = "Carlo's Pokedex App";
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
          <Link to="/">
            <header className="text-4xl font-bold text-yellow-500">
              Pokemon Picker
            </header>
          </Link>
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
