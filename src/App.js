import React, { useState } from "react";
import { HashRouter, Route } from "react-router-dom";

import Homepage from "./components/Homepage";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import Nav from "./components/Nav";

import "./App.css";

const unloggedRoutes = [
  ["Home", "/"],
  ["Sign Up", "/signUp"],
  ["Sign In", "/signIn"],
];

const loggedRoutes = [
  ["Home", "/"],
  ["Profile", "/profile"],
  ["Sign Out", "/"],
];

function App() {
  const [userId, setUserId] = useState("");
  const [matchId, setMatchId] = useState("");

  const displayNavType = userId ? unloggedRoutes : loggedRoutes;

  return (
    <HashRouter basename="/">
      <Nav routes={displayNavType} />
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
