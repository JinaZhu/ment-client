import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

import "./App.css";

const routes = [
  ["Home", "/"],
  ["Sign Up", "/signUp"],
  ["Sign In", "/signIn"],
];

function App() {
  const [userId, setUserId] = useState("");
  const [matchId, setMatchId] = useState("");

  return (
    <HashRouter basename="/">
      <Nav routes={routes} />
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/signIn" component={SignIn} />
        <Route exact path="/profile" component={Profile} matchId={matchId} />
      </div>
    </HashRouter>
  );
}

export default App;
