import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <h3 className="text-2xl">Hello World</h3>
      </div>

      <Switch>
        <Route path="/about">
          <About></About>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
