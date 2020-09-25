import React, { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import Login from './Login';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { getTokenFromUrl } from './spotify';
import './App.css';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      });

      dispatch({
        type: "SET_SPOTIFY",
        spotify
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user
        })
      });

      spotify.getUserPlaylists().then(playlists => {
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists
        })
      });

      spotify.getPlaylist('37i9dQZEVXcU9OIWC4pUBq').then(response => {
        dispatch({
          type: 'SET_DISCOVER_WEEKLY',
          discover_weekly: response
        })
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: "SET_TOP_ARTISTS",
          top_artists: response,
        })
      );


    };
  }, [dispatch]);

  return (
    <div className="app">
      {token ? (<Player spotify={spotify} />) : (<Login />)}
    </div>
  );
}

export default App;
