import React, { useState, useEffect } from "react";
import Hero from "../src/sections/Hero";
import Header from "../src/sections/Header";
import useAuth from "../src/hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import PlayerControls from "../src/sections/PlayerControls";
import Player from "../src/components/Player";

// Initialise API with clientID
const spotifyApi = new SpotifyWebApi({
  clientId: "bb448894855b4053b6843861b7943f9e",
});

function Dashboard({ code }) {
  // Getting accessToken from useAuth hook
  const accessToken = useAuth(code);

  // Initializing states
  const [newReleases, setNewReleases] = useState([]);
  const [trackURIs, setTrackURIs] = useState([]);

  // Set accessToken and populate 'newReleases'
  useEffect(() => {
    async function getTracks() {
      try {
        const response = await fetch(
          `http://localhost:3001/new-releases/${accessToken}`
        );
        const data = await response.json();
        console.log(data.albums);

        data.albums.map(async (album) => {
          const tracks = await spotifyApi.getAlbumTracks(album.id);
          setNewReleases(await tracks.body.items);
        });
      } catch (error) {
        console.log(error.message);
      }
    }
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    getTracks();
  }, [accessToken]);

  // Populate list of trackURI strings
  useEffect(() => {
    setTrackURIs(
      newReleases.map((track) => {
        return track.uri;
      })
    );
  }, [newReleases]);

  return (
    <>
      <Header />
      {newReleases ? <Hero songs={newReleases} /> : null}
      {newReleases ? (
        <Player accessToken={accessToken} trackUri={trackURIs} />
      ) : null}
    </>
  );
}

export default Dashboard;
