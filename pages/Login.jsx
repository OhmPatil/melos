import React from "react"

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=bb448894855b4053b6843861b7943f9e&response_type=code&redirect_uri=http://localhost:5173/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <div
      className="flex justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <a className="" href={AUTH_URL}>
        Login With Spotify
      </a>
    </div>
  )
}
