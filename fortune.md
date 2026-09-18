---
layout: default
title: 测测运势
permalink: /fortune/
---

<main class="fortune-page">
  <section class="fortune-app" aria-labelledby="fortune-title">
    <header class="fortune-hero">
      <div class="fortune-hero__copy">
        <p class="fortune-kicker"><span aria-hidden="true">✦</span> DAILY ORACLE · 每日一签</p>
        <h1 id="fortune-title">今天，宇宙想提醒你什么？</h1>
        <p>选一个此刻最在意的方向，再凭直觉翻开一张牌。结果只属于今天的你。</p>
      </div>
      <div class="fortune-date-card" aria-label="今日日期">
        <span id="fortune-weekday">星期</span>
        <strong id="fortune-date">----</strong>
        <small>今日星图已校准</small>
      </div>
    </header>

    <div class="fortune-workspace">
      <section class="fortune-setup" id="fortune-setup" aria-labelledby="fortune-setup-title">
        <div class="fortune-section-heading">
          <span>01</span>
          <div>
            <h2 id="fortune-setup-title">留下你的今日坐标</h2>
            <p>称呼不会上传，只用于生成属于你的稳定今日签。</p>
          </div>
        </div>

        <label class="fortune-name-field" for="fortune-name">
          <span>怎么称呼你？</span>
          <input id="fortune-name" type="text" maxlength="20" autocomplete="nickname" placeholder="匿名旅人">
        </label>

        <fieldset class="fortune-focus">
          <legend>今天最想观察哪一面？</legend>
          <div class="fortune-focus__options">
            <input type="radio" name="fortune-focus" id="fortune-focus-overall" value="overall" checked>
            <label for="fortune-focus-overall"><span>✦</span>综合</label>

            <input type="radio" name="fortune-focus" id="fortune-focus-study" value="study">
            <label for="fortune-focus-study"><span>⌘</span>学业</label>

            <input type="radio" name="fortune-focus" id="fortune-focus-social" value="social">
            <label for="fortune-focus-social"><span>◎</span>人际</label>

            <input type="radio" name="fortune-focus" id="fortune-focus-creative" value="creative">
            <label for="fortune-focus-creative"><span>△</span>灵感</label>

            <input type="radio" name="fortune-focus" id="fortune-focus-rest" value="rest">
            <label for="fortune-focus-rest"><span>☾</span>状态</label>
          </div>
        </fieldset>

        <div class="fortune-card-picker">
          <div class="fortune-section-heading fortune-section-heading--cards">
            <span>02</span>
            <div>
              <h2>凭第一直觉选一张牌</h2>
              <p>不用分析。犹豫时，通常第一眼已经替你选好了。</p>
            </div>
          </div>

          <div class="fortune-cards" role="group" aria-label="选择一张今日签牌">
            <button class="fortune-card" type="button" data-card="0" aria-pressed="false">
              <span class="fortune-card__constellation" aria-hidden="true">✦<i></i>·</span>
              <span class="fortune-card__symbol" aria-hidden="true">☼</span>
              <span class="fortune-card__label">晨星</span>
            </button>
            <button class="fortune-card" type="button" data-card="1" aria-pressed="false">
              <span class="fortune-card__constellation" aria-hidden="true">·<i></i>✧</span>
              <span class="fortune-card__symbol" aria-hidden="true">◇</span>
              <span class="fortune-card__label">回响</span>
            </button>
            <button class="fortune-card" type="button" data-card="2" aria-pressed="false">
              <span class="fortune-card__constellation" aria-hidden="true">☾<i></i>·</span>
              <span class="fortune-card__symbol" aria-hidden="true">◌</span>
              <span class="fortune-card__label">潮汐</span>
            </button>
          </div>
        </div>

        <button class="fortune-draw-button" id="fortune-draw" type="button" disabled>
          <span>翻开今日签</span>
          <i aria-hidden="true">→</i>
        </button>
        <p class="fortune-privacy"><span aria-hidden="true">◉</span> 每日结果由日期、称呼、主题与所选签牌共同生成</p>
      </section>

      <section class="fortune-result" id="fortune-result" aria-labelledby="fortune-result-title" aria-live="polite" hidden>
        <div class="fortune-result__topline">
          <p>YOUR DAILY SIGNAL</p>
          <button id="fortune-reset" type="button">重新选牌</button>
        </div>

        <div class="fortune-verdict">
          <div class="fortune-oracle-card" aria-hidden="true">
            <span id="fortune-oracle-symbol">✦</span>
            <small id="fortune-oracle-name">今日签</small>
          </div>
          <div class="fortune-verdict__copy">
            <span class="fortune-level" id="fortune-level">中吉</span>
            <h2 id="fortune-result-title">今天的星轨正在展开</h2>
            <p id="fortune-summary"></p>
          </div>
          <div class="fortune-score-ring" id="fortune-score-ring" style="--fortune-score: 0%">
            <strong id="fortune-score">0</strong>
            <span>幸运指数</span>
          </div>
        </div>

        <div class="fortune-metrics" aria-label="今日分项指数">
          <div class="fortune-metric" data-metric="study">
            <div><span>学业效率</span><strong>0</strong></div>
            <div class="fortune-metric__track"><i></i></div>
          </div>
          <div class="fortune-metric" data-metric="social">
            <div><span>人际磁场</span><strong>0</strong></div>
            <div class="fortune-metric__track"><i></i></div>
          </div>
          <div class="fortune-metric" data-metric="creative">
            <div><span>灵感浓度</span><strong>0</strong></div>
            <div class="fortune-metric__track"><i></i></div>
          </div>
          <div class="fortune-metric" data-metric="energy">
            <div><span>行动能量</span><strong>0</strong></div>
            <div class="fortune-metric__track"><i></i></div>
          </div>
        </div>

        <blockquote class="fortune-message">
          <span aria-hidden="true">“</span>
          <p id="fortune-message"></p>
        </blockquote>

        <div class="fortune-guidance">
          <article class="fortune-guidance__item is-do">
            <span>宜</span>
            <div><small>适合做</small><strong id="fortune-do"></strong></div>
          </article>
          <article class="fortune-guidance__item is-avoid">
            <span>忌</span>
            <div><small>尽量避免</small><strong id="fortune-avoid"></strong></div>
          </article>
        </div>

        <div class="fortune-details">
          <div><small>幸运色</small><strong id="fortune-color"></strong></div>
          <div><small>幸运数字</small><strong id="fortune-number"></strong></div>
          <div><small>能量时刻</small><strong id="fortune-time"></strong></div>
          <div><small>今日方位</small><strong id="fortune-direction"></strong></div>
        </div>

        <div class="fortune-quest">
          <div class="fortune-quest__icon" aria-hidden="true">✓</div>
          <div>
            <small>TODAY'S SIDE QUEST</small>
            <strong id="fortune-quest"></strong>
          </div>
        </div>

        <div class="fortune-result__actions">
          <button class="fortune-copy-button" id="fortune-copy" type="button">复制今日签</button>
          <span id="fortune-copy-status" role="status"></span>
        </div>
      </section>
    </div>
  </section>
</main>

<link rel="stylesheet" href="{{ '/assets/css/fortune.css' | relative_url }}">
<script src="{{ '/assets/js/fortune.js' | relative_url }}" defer></script>
