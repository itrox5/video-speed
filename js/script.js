class VideoPlayer {
  constructor(speed, bar, video) {
    this.speed = speed;
    this.bar = bar;
    this.video = video;
  }

  handleMove(e) {
    const bar = speed.querySelector('.wrapper__speed-bar');
    const video = document.querySelector('.wrapper__video');
    const y = e.pageY - this.speed.offsetTop;
    const percent = y / this.speed.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = `${Math.round(percent * 100)}%`;
    const playbackRate = percent * (max - min) + min;
    this.bar.style.height = height;
    this.bar.textContent = `${playbackRate.toFixed(2)}×`;
    this.video.playbackRate = playbackRate;
  }
}

const speed = document.querySelector('.wrapper__speed-container');
const bar = speed.querySelector('.wrapper__speed-bar');
const video = document.querySelector('.wrapper__video');
const videoPlayer = new VideoPlayer(speed, bar, video);
speed.addEventListener('mousemove', videoPlayer.handleMove.bind(videoPlayer));
  