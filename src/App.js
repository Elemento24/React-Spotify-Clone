import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Login';
import { getTokenFromUrl } from './spotify';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    };

    console.log(token);
  }, [token]);

  return (
    <div className="app">
      {token ? (<h1>I am Logged In</h1>) : (<Login />)}
    </div>
  );
}

export default App;
