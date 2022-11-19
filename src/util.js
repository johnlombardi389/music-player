export const playAudio = (isPlaying, audioRef) => {
  // Check if song is playing and wait for audio
  if (isPlaying) {
    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise.then((audio) => {
        audioRef.current.play();
      });
    }
  }
};
