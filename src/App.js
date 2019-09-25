import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Settings from "./components/settings";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div class="page">
        <Header />
        <div className="content">
          <Route path="/" exact component={Home} />
          <Route path="/settings/" component={Settings} />
        </div>
      </div>
    </Router>
  );
}

export default App;
