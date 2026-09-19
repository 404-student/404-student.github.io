---
layout: default
title: 每周推歌
permalink: /music/
---

<main class="music-page">
  <section class="music-stage" aria-labelledby="music-page-title">
    <header class="music-header">
      <div>
        <p class="music-eyebrow"><span aria-hidden="true"></span> 404 STUDENT'S WEEKLY ROTATION</p>
        <h1 id="music-page-title">每周推歌</h1>
      </div>
      <div class="music-issue">
        <span>ISSUE 01</span>
        <strong>2026.09.14 — 09.20</strong>
      </div>
    </header>

    <div class="music-player-container">
      <div class="music-visual">
        <div class="music-visual__caption">
          <span>THIS WEEK'S PICK</span>
          <span>33⅓ RPM</span>
        </div>
        <div class="album-art">
          <div class="album-art__halo" aria-hidden="true"></div>
          <img src="https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg" alt="当前推荐歌曲的专辑封面" class="album-image" id="album-image">
          <span class="album-art__spindle" aria-hidden="true"></span>
        </div>
        <p class="music-visual__note">SELECTED BY 404 STUDENT</p>
      </div>

      <div class="player-controls">
        <div class="now-playing">
          <span class="now-playing__dot" aria-hidden="true"></span>
          <span>NOW PLAYING</span>
        </div>

        <div class="song-info">
          <h2 class="song-title" id="song-title">正在读取本周推荐…</h2>
          <p class="song-artist" id="song-artist">请稍候</p>
        </div>

        <div class="music-wave" aria-hidden="true">
          <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
        </div>

        <div class="progress-container">
          <div class="progress-bar" id="progress-bar" title="点击调整播放进度">
            <div class="progress" id="progress"></div>
          </div>
          <div class="progress-time">
            <span id="current-time">0:00</span>
            <span id="total-time">0:00</span>
          </div>
        </div>

        <div class="controls">
          <span class="music-track-number">01</span>
          <button class="control-button play-button" id="play-button" type="button" aria-label="播放或暂停">
            <i class="fas fa-play" id="play-icon" aria-hidden="true"></i>
          </button>
          <span class="music-track-label">WEEKLY PICK</span>
        </div>

        <p class="music-listen-hint">戴上耳机，完整听完这一首。</p>
      </div>
    </div>

    <aside class="song-description" aria-labelledby="recommendation-title">
      <div class="song-description__index">A</div>
      <div>
        <p class="song-description__eyebrow">EDITOR'S NOTE</p>
        <h2 id="recommendation-title">为什么是这首歌？</h2>
      </div>
      <div class="song-description__copy">
        <p>答应我会幸福</p>
        <p>最近在重构网站，正好我大爹张方钊要发新专辑了，这首歌又是我最喜欢他的一首，所以推荐给大家~</p>
      </div>
    </aside>

    <footer class="music-footer-note">
      <span>NEXT UPDATE</span>
      <strong>下周见，让一首好歌替这一周留下坐标。</strong>
    </footer>
  </section>

  <audio id="audio-player" preload="metadata"></audio>
</main>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<link rel="stylesheet" href="{{ '/assets/css/music.css' | relative_url }}">
<script src="{{ '/assets/js/music.js' | relative_url }}?v={{ site.time | date: '%s' }}"></script>
