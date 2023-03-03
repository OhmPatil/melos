import React, { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

function Player({ accessToken, trackUri }) {
  // console.log("PLAYER LOG", trackUri);

  const [play, setPlay] = useState(false);

  useEffect(() => {
    setPlay(true)
  }, [trackUri])

  if (!accessToken) return null;
  return (
    <div className="border-4 border-blue-500 fixed bottom-0 w-full">
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={(state) => {
          if (!state.isPlaying) setPlay(false);
        }}
        uris={trackUri}
        play={play}
        hideAttribution={true}
        styles={{
          activeColor: "#fff",
          bgColor: "#091227",
          altColor: "#fff",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          sliderTrackColor: "#fff",
          sliderHandleColor: "#fff",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </div>
  );
}

export default Player;
