import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import News from "./components/news";
import Menu from "./components/menu";

function App() {
  return (
    <Router>
      <Menu />
      <Route to="/" component={News} />
    </Router>
  );
}

export default App;
