import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const onPlay = function (event) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(event.seconds));
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  }
};

player.on('timeupdate', throttle(onPlay, 1000));
const currentTime = localStorage.getItem(STORAGE_KEY);

player
  .setCurrentTime(currentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });
