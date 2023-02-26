import { useState } from "react";
import "../src/styles/App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const code = new URLSearchParams(window.location.search).get('code')

function App() {
  return (
    <div className="App">
      {code ? <Dashboard code={code}/> : <Login/>}
    </div>
  );
}

export default App;
