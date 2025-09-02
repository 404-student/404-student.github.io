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
  const songTitle = document.getElementById('song-title');
  const songArtist = document.getElementById('song-artist');

  let isPlaying = false;
  let currentSongId = '491943377'; // 在这里填入目标歌曲的ID

  // 从API获取歌曲数据
  async function fetchSongData(songId) {
    try {
      const response = await fetch(`https://api.paugram.com/netease/?id=${songId}`);
      
      if (!response.ok) {
        throw new Error(`网络响应异常: ${response.status}`);
      }
      
      const data = await response.json();
      
      // 更新页面信息
      songTitle.textContent = data.title || '未知歌曲';
      songArtist.textContent = data.artist || '未知歌手';
      albumImage.src = data.cover || '';
      
      // 设置音频源
      audioPlayer.src = data.link || '';
      
      // 预加载音频
      audioPlayer.load();
      
      console.log('歌曲数据获取成功:', data);
    } catch (error) {
      console.error('获取歌曲信息失败:', error);
      // 如果API请求失败，使用默认数据
      setDefaultSongData();
    }
  }

  // 设置默认歌曲数据（备用）
  function setDefaultSongData() {
    const defaultSongData = {
      title: "晴天",
      artist: "周杰伦",
      cover: "https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
      link: "https://music.163.com/song/media/outer/url?id=186436.mp3"
    };
    
    songTitle.textContent = defaultSongData.title;
    songArtist.textContent = defaultSongData.artist;
    albumImage.src = defaultSongData.cover;
    audioPlayer.src = defaultSongData.link;
    audioPlayer.load();
  }

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
    // 确保音频已加载
    if (audioPlayer.src && audioPlayer.src !== '') {
      isPlaying = true;
      playIcon.classList.remove('fa-play');
      playIcon.classList.add('fa-pause');
      albumImage.classList.add('playing');
      audioPlayer.play().catch(error => {
        console.error('播放失败:', error);
        pauseSong(); // 如果播放失败，恢复状态
      });
    }
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
    
    if (duration) {
      audioPlayer.currentTime = (clickX / width) * duration;
    }
  }

  // 事件监听器
  playButton.addEventListener('click', togglePlay);
  audioPlayer.addEventListener('timeupdate', updateProgress);
  progressBar.addEventListener('click', setProgress);

  // 初始化时间显示
  audioPlayer.addEventListener('loadedmetadata', function() {
    if (audioPlayer.duration) {
      totalTimeEl.textContent = formatTime(audioPlayer.duration);
    }
  });

  // 音频加载错误处理
  audioPlayer.addEventListener('error', function() {
    console.error('音频加载失败');
    // 可以在这里添加错误处理逻辑，比如切换到备用歌曲
  });

  // 初始化：从API获取歌曲数据
  fetchSongData(currentSongId);
});
