import React from "react";
import { playAudio } from "../util";

function LibrarySong({
  songs,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,
}) {
  const songSelectHandler = () => {
    setCurrentSong(song);
    // Check and set active state of song
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);

    // Check if song is playing and wait for audio
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      className={`library-song ${song.active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
