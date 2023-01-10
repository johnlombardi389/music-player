# Music Player App

![Screenshot](https://user-images.githubusercontent.com/67701361/211441174-c37c5f97-45d2-44fc-a488-85f31c9b0d53.png)

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [Tools](#tools)
  - [What I learned](#what-i-learned)
  - [Example Code](#example-code)
- [Author](#author)
- [Credits](#credits)

## Overview

The app allows users to browse and play songs from the library, with the ability to skip forward and back. It features a custom progress bar for each song, with a unique gradient based on the song's cover art. The UI is designed to be clean and intuitive, making it easy for users to find and play their favorite songs. In addition to playing music, the app also displays information about the currently playing song, such as the title and artist. Overall, this music player provides a seamless listening experience for users looking to enjoy copyright-free music from chillhop.com.

### Links

- Live Site URL: [Music Player App](https://johnlombardi389.github.io/music-player/)

---

## My process

### Tools

- React
- JavaScript
- Sass
- UUID
- Git

### What I learned

- Implementing useState and useRef hooks for React
- Installing and using different packages for React
- Creating my own data function to store song information
- Using SASS with React and making individual files to style each component

### Example Code

Getting the current song duration information to update the state:

```javascript
const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
  animationPercentage: 0,
});
```

```javascript
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  // Calculate percentage
  const roundedCurrent = Math.round(current);
  const roundedDuration = Math.round(duration);
  const animation = Math.round((roundedCurrent / roundedDuration) * 100);
  setSongInfo({
    ...songInfo,
    currentTime: current,
    duration: duration,
    animationPercentage: animation,
  });
};
```

---

## Author

John Lombardi

- [Portfolio](https://johnlombardi389.github.io/portfolio/)
- [LinkedIn](https://www.linkedin.com/in/johnlombardi389/)
- [GitHub](https://github.com/johnlombardi389)

## Credits

- Music from [Chillhop Music](https://chillhop.com/)
