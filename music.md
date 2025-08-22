<!-- 粒子背景 -->
<div id="particles-js"></div>
  
<!-- 内容容器 -->
<div class="content-container">
  <!-- 导航栏 -->
  <nav class="navbar">
    <div class="logo">CodeFortune</div>
    <div class="nav-links">
      <a href="/">首页</a>
      <a href="/fortune/">运势测试</a>
      <a href="/music/" class="active">音乐播放</a>
      <a href="/blog/">博客</a>
      <a href="/about/">关于</a>
    </div>
  </nav>
  
  <!-- 音乐播放器 -->
  <div class="music-player-container">
    <div class="player-header">
      <h1>音乐播放器</h1>
      <p>享受音乐，享受编程时光</p>
    </div>
    
    <!-- 播放器主体 -->
    <div class="player-body">
      <div class="album-art">
        <img src="https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg" alt="专辑封面" class="album-image" id="album-image">
      </div>
      
      <div class="player-controls">
        <div class="song-info">
          <h2 class="song-title" id="song-title">晴天</h2>
          <p class="song-artist" id="song-artist">周杰伦</p>
        </div>
        
        <div class="progress-container">
          <div class="progress-bar" id="progress-bar">
            <div class="progress" id="progress"></div>
          </div>
          <div class="progress-time">
            <span id="current-time">0:00</span>
            <span id="total-time">0:00</span>
          </div>
        </div>
        
        <div class="controls">
          <button class="control-button play-button" id="play-button">
            <i class="fas fa-play" id="play-icon"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 音频元素 -->
<audio id="audio-player"></audio>

<!-- 粒子库 -->
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script src="script.js"></script>
