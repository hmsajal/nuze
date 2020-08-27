import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import News from "./components/newsContainer";

function App() {
  return (
    <Router>
      <News />
    </Router>
  );
}

export default App;
