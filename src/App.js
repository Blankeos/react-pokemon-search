import "./App.css";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { useEffect, useState, useMemo } from "react";
import PikachuLogo from "./pikachu.svg";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [text, setText] = useState("");
  const [filteredPokemon, setFilteredPokemon] = useState([]);

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

  useMemo(() => {
    if (text.length === 0) {
      setFilteredPokemon(pokemon.results);
      return;
    }
    setFilteredPokemon(() => {
      return pokemon.results.filter((poke) => poke.name.includes(text));
    });
  }, [pokemon.results, text]);

  const resetFilters = () => {
    setText("");
    setFilteredPokemon(pokemon.results);
  };

  return (
    <Router>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link
            onClick={resetFilters}
            className="flex flex-col gap-2 transform transition hover:scale-105"
            to="/"
          >
            <img className="h-14" src={PikachuLogo}></img>
            <header className="text-4xl font-bold text-yellow-500 text-center">
              Pokémon Picker
              <p className="text-sm font-normal text-yellow-400">
                Made by Carlo Taleon
              </p>
            </header>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/about/:slug">
          <About></About>
        </Route>
        <Route exact path="/">
          <div className="w-full flex justify-center">
            <input
              type="text"
              onChange={($event) => setText($event.target.value)}
              placeholder="  Enter Pokemon here"
              className="mt-10 p-2 w-10/12 md:w-6/12 bg-white ring-1 ring-yellow-300 rounded-lg placeholder-gray-400 text-gray-900 appearance-none shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          {pokemon && (
            <Home
              prop={filteredPokemon}
              resetFilters={resetFilters}
              text={text}
            />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
