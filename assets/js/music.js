document.addEventListener('DOMContentLoaded', function() {
  // 初始化粒子背景
  particlesJS('particles-js', {
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: true },
      size: { value: 3, random: true },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: true,
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      }
    },
    retina_detect: true
  });

  // 音乐播放功能
  const audioPlayer = document.getElementById('audio-player');
  const playButton = document.getElementById('play-button');
  const playIcon = document.getElementById('play-icon');
  const progressBar = document.getElementById('progress-bar');
  const progress = document.getElementById('progress');
  const currentTimeEl = document.getElementById('current-time');
  const totalTimeEl = document.getElementById('total-time');
  const albumImage = document.getElementById('album-image');

  // 模拟音乐数据
  const songData = {
    title: "晴天",
    artist: "周杰伦",
    duration: "4:30",
    cover: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
    url: "https://music.163.com/song/media/outer/url?id=186436.mp3"
  };

  let isPlaying = false;

  // 初始化歌曲信息
  document.getElementById('song-title').textContent = songData.title;
  document.getElementById('song-artist').textContent = songData.artist;
  albumImage.src = songData.cover;
  audioPlayer.src = songData.url;

  // 格式化时间
  function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  // 播放/暂停功能
  function togglePlay() {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  }

  function playSong() {
    isPlaying = true;
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
    albumImage.classList.add('playing');
    audioPlayer.play();
  }

  function pauseSong() {
    isPlaying = false;
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    albumImage.classList.remove('playing');
    audioPlayer.pause();
  }

  // 更新进度条
  function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    if (duration) {
      // 更新进度条宽度
      const progressPercent = (currentTime / duration) * 100;
      progress.style.width = `${progressPercent}%`;
      
      // 更新时间显示
      currentTimeEl.textContent = formatTime(currentTime);
      totalTimeEl.textContent = formatTime(duration);
    }
  }

  // 设置进度条
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioPlayer.duration;
    
    audioPlayer.currentTime = (clickX / width) * duration;
  }

  // 事件监听器
  playButton.addEventListener('click', togglePlay);
  audioPlayer.addEventListener('timeupdate', updateProgress);
  progressBar.addEventListener('click', setProgress);

  // 初始化时间显示
  audioPlayer.addEventListener('loadedmetadata', function() {
    totalTimeEl.textContent = formatTime(audioPlayer.duration);
  });
});
