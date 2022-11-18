import React from "react";

function LibrarySong({ song }) {
  return (
    <div className="library-song">
      <img src={song.cover} alt={song.name} />
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
    </div>
  );
}

export default LibrarySong;
