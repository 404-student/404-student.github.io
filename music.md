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
      <h1>今日推荐歌曲</h1>
      <p>2025-08-23</p>
    </div>
    <div class="player-body">
      <div class="album-art">
        <img src="https://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg" alt="专辑封面" class="album-image" id="album-image">
      </div>
      <div class="player-controls">
        <div class="song-info">
          <h2 class="song-title" id="song-title">金球奖</h2>
          <p class="song-artist" id="song-artist">谢帝/华云龙KLE</p>
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
        <p>来自于谢帝今天发行的mixtape《Couple Hunnid All Star Mixtape Vol.1》，虽然这首作为先行曲很早就发布了。谢帝的这张专辑邀请了大批圈内有名气的rapper，既可以看作是谢帝邀请说唱圈大批rapper的狂欢，也可以看作谢帝带领这些rapper在圈外吸引人气。而华云龙作为绝对的山东新生代，在今年五月刚靠着一张专辑《龙年》大放异彩，正是需要老大哥领衔的时候。</p>
        <p>在这样一首阴暗的孟菲斯伴奏上，两位rapper的腔调完全符合这样一首慢BPM的狠厉伴奏。伴奏的主体是由一段小提琴loop打底，再加上每个小节开头的低音钢琴，营造了很冷峻的氛围。而谢帝和华云龙两人都是孟菲斯的高手，谢帝的腔调比较干净利落，flow多变又贴合伴奏；而华云龙虽然是今年刚崭露头角的新星，但在这首歌里一点也不露怯，山东方言加上富有特色的歌词，让华云龙的个人特色得到了充分的展现。可以说，这首歌非常好地展现了这张专辑的意义。</p>
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
