import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import { useEffect, useState } from "react";

function App() {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  }, []);

  console.log(pokemon);

  return (
    <Router>
      <div className="App">
        <h3 className="text-2xl">Hello World</h3>
        {pokemon && <Home prop={pokemon.results} />}
      </div>

      <Switch>
        <Route path="/about/:slug">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
