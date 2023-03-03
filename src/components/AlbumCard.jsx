import React from "react";
import { Card } from "flowbite-react";

function AlbumCard({ album }) {
  return (
    <div className="text-white border-2 border-yellow-300 w-[250px] h-[250px] flex flex-col justify-center items-center cursor-pointer hover:scale-110">
      <div className="w-[70%]">
        <img src={album.images[0].url} alt="" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1>
          {album?.name}
        </h1>
        <h2>
          {album.artists[0].name}
        </h2>
      </div>
    </div>
  );
}

export default AlbumCard;
