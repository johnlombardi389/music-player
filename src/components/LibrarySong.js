import React from "react";
import { playAudio } from "../util";

function LibrarySong({
  /*songs,
  song,
  setCurrentSong,
  id,
  audioRef,
  isPlaying,
  setSongs,*/
  name,
  artist,
  cover,
  id,
  setCurrentSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
  active,
}) {
  /*const songSelectHandler = async () => {
    await setCurrentSong(song);
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
    if (isPlaying) audioRef.current.play();
  };*/

  const songSelectHandler = () => {
    const selectedSong = songs.filter((state) => state.id === id);
    setCurrentSong({ ...selectedSong[0] });
    //Set Active in library
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

    //Play audio
    playAudio(isPlaying, audioRef);
  };

  return (
    <div
      className={`library-song ${active ? "selected" : ""}`}
      onClick={songSelectHandler}
    >
      <img src={cover} alt={name} />
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default LibrarySong;
