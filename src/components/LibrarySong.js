import React from "react";

function LibrarySong({ currentSong }) {
  return (
    <div className="library-song">
      <img src={currentSong.cover} alt={currentSong.name} />
      <h3>{currentSong.name}</h3>
      <h4>{currentSong.artist}</h4>
    </div>
  );
}

export default LibrarySong;
