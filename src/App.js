import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Header from "./components/header";
import { Home } from "./components/home";
// import "./store";
import { Settings } from "./components/settings";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/app.scss'

function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <div className="content">
          <Route path="/home/" exact component={Home} />
          <Route path="/settings/" component={Settings} />
          <Redirect exact from="/" to="/home/" />
        </div>
      </div>
    </Router>
  );
}

export default App;
