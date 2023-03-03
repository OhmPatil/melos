import { useState } from "react";
import "../src/styles/App.css";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

const code = new URLSearchParams(window.location.search).get('code')
const token = window.localStorage.getItem('token')

function App() {
  return (
    <div className="">
      {code ? <Dashboard code={code} token={token}/> : <Login/>}
      {/* <Dashboard code={code}/> */}
    </div>
  );
}

export default App;
