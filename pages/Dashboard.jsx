import React, { useState, useEffect } from "react";
import Hero from "../src/sections/Hero";
import Header from "../src/sections/Header";
import useAuth from "../src/hooks/useAuth";
import SpotifyWebApi from "spotify-web-api-node";
import PlayerControls from "../src/sections/PlayerControls";
import Player from "../src/components/Player";
// import { Sidebar } from "flowbite-react";
import Sidebar from "../src/components/Sidebar";
import AlbumCard from "../src/components/AlbumCard";

// Initialise API with clientID
const spotifyApi = new SpotifyWebApi({
  clientId: "bb448894855b4053b6843861b7943f9e",
});

function Dashboard({ code, token }) {
  // Getting accessToken from useAuth hook

  const accessToken = useAuth(code)
  // const accessToken = window.localStorage.getItem("token")

  // Initializing states
  const [newReleases, setNewReleases] = useState([]);
  const [trackURIs, setTrackURIs] = useState([]);
  const [albums, setAlbums] = useState([])

  // Set accessToken and populate 'albums'
  useEffect(() => {
    async function getTracks() {
      try {
        const response = await fetch(
          `http://localhost:3001/new-releases/${accessToken}`
        );
        const data = await response.json();
        console.log(data.albums);
        setAlbums(data.albums)
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

  // Function to get album tracks from id
  async function getAlbumTracks(albumID){
    console.log(albumID);
    const tracks = await spotifyApi.getAlbumTracks(albumID)
    setNewReleases(tracks.body.items)
  }

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <Sidebar/>
        <div className="border-4 w-full border-green-500 flex flex-wrap gap-6 justify-center overflow-auto">
          {albums.map(album => {
               return (
                <div onClick={() => getAlbumTracks(album.id)}>
                  <AlbumCard key={album.id} album={album}/>
                </div>
               )
              })}
        </div>
      </div>
      {newReleases ? (
        <Player accessToken={accessToken} trackUri={trackURIs}/>
        ) : null}
      </div>
  );
}

export default Dashboard;
