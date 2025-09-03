---
layout: page
title: 每周推歌
permalink: /music/
---

<div class="music-container">
  <!-- 粒子背景 -->
  <div id="particles-js"></div>
  
  <!-- 音乐播放器 -->
  <div class="music-player-container">
    <div class="player-header">
      <h1>本周推荐歌曲</h1>
      <p>2025-09-01 to 2025-09-08</p>
    </div>
    <div class="player-body">
      <div class="album-art">
        <img src="https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg" alt="专辑封面" class="album-image" id="album-image">
      </div>
      <div class="player-controls">
        <div class="song-info">
          <h2 class="song-title" id="song-title">See You Again</h2>
          <p class="song-artist" id="song-artist">Tyler, the Creator</p>
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
        <h3>推荐原因</h3>
        <p>来自于2017.07.21发行的专辑《Flower Boy》。推荐这首老歌是因为，2号我买了这张专辑的黑胶嘿嘿</p>
        <p>这张专辑获得了格莱美最佳说唱专辑的提名，当年败给了喇嘛的DAMN.，说实话我更喜欢花男孩一点。而这首又是我在这张专辑里比较喜欢的歌，给我很欢快的感觉。</p>
        <p>由于开学了缺少时间经营，每日推歌改为每周推歌。</p>
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
