import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Login';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        console.log(user);
      })
    };

    console.log(_token);
  }, []);

  return (
    <div className="app">
      {token ? (<Player />) : (<Login />)}
    </div>
  );
}

export default App;
