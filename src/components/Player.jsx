import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function Player({ accessToken, trackUri }) {
  console.log("PLAYER LOG", trackUri);

  if (!accessToken) return null;
  return (
    <SpotifyPlayer
      token={accessToken}
      showSaveIcon
      uris={trackUri}
      styles={{
        activeColor: '#fff',
        bgColor: '#fff',
        altColor: '#fff',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        sliderTrackColor: '#fff',
        sliderHandleColor: "#fff",
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
      }}
    />
  );
}

export default Player;
