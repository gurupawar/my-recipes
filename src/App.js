import "./App.css";
import Home from "./pages/Home/Home";
import Recipes from "./pages/Recipes/Recipes";
import Create from "./pages/Create/Create";
import Header from "./components/Header";
import Search from "./pages/Search/Search";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ThemeSelector from "./components/ThemeSelector";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { mode } = useTheme();

  return (
    <div className={`App ${mode}`}>
      <Router>
        <Header />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipes/:id">
            <Recipes />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
