---
layout: page
title: 每日推歌
permalink: /music/
---

<div class="music-container">
  <!-- 粒子背景 -->
  <div id="particles-js"></div>
  
  <!-- 音乐播放器 -->
  <div class="music-player-container">
    <div class="player-header">
      <h1>音乐播放器</h1>
      <p>享受音乐，享受编程时光</p>
    </div>
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
      <div class="song-description">
        <h3>关于《晴天》</h3>
        <p>《晴天》是周杰伦演唱的一首歌曲，由周杰伦作词、作曲、编曲，收录于周杰伦2003年7月31日发行的专辑《叶惠美》中。2003年，该曲获得"第十届全球华语音乐榜"港台地区最佳歌曲奖。2005年，获得"第四届全球华语歌曲排行榜"年度最受欢迎金曲奖。</p>
        <p>这首歌曲讲述的是怀念校园的点滴，一起约定，等到放晴的那天，共同来谱一段纯纯的爱。歌曲用简洁的吉他伴奏和周杰伦独特的唱腔，完美诠释了青春时期的青涩与美好回忆。</p>
      </div>
    </div>
  </div>
  
  <!-- 音频元素 -->
  <audio id="audio-player"></audio>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="/assets/css/music.css">
<script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
<script src="/assets/js/music.js"></script>
