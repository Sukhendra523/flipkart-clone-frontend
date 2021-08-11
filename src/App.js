import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllCategory } from "./actions";
import HomePage from "./components/containers/HomePage";
import ProductListPage from "./components/containers/ProductListPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  });
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/:slug" component={ProductListPage} />
      </Switch>
    </Router>
  );
}

export default App;
