import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const token = hash.access_token;
    if (token) {
      setToken(token);
    }

    console.log("access_token", token);
  }, []);

  return (
    <div className="App">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
}

export default App;
