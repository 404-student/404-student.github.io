(function () {
  "use strict";

  const focusProfiles = {
    overall: { label: "综合", boost: null },
    study: { label: "学业", boost: "study" },
    social: { label: "人际", boost: "social" },
    creative: { label: "灵感", boost: "creative" },
    rest: { label: "状态", boost: "energy" }
  };

  const oracleDeck = [
    { name: "破晓", symbol: "☼", title: "先迈出一步，答案才会显形", message: "今天不必等到万事俱备。一个足够小、但真实发生的动作，会比长久构想更接近答案。" },
    { name: "回声", symbol: "◇", title: "认真听，线索藏在重复出现的声音里", message: "近期反复出现的人、念头或问题并非偶然。把它写下来，你会看见此前忽略的关联。" },
    { name: "潮汐", symbol: "◌", title: "允许节奏有涨落", message: "不是每一分钟都要高效。今天真正重要的，是在能量到来时抓住它，退潮时照顾好自己。" },
    { name: "北辰", symbol: "✦", title: "先确认方向，再加快速度", message: "忙碌不等于接近目标。花十分钟重新排序优先级，会替接下来的你省下更多时间。" },
    { name: "棱镜", symbol: "△", title: "换一个角度，旧问题会露出新出口", message: "今天适合打破惯用解法。向不同领域借一个方法，或者请一个意料之外的人给出意见。" },
    { name: "微光", symbol: "✧", title: "微小的好事正在积累", message: "别因为变化不够戏剧化就否定进展。那些不起眼的完成，正在悄悄改变事情的走向。" },
    { name: "界线", symbol: "□", title: "清楚地说不，也是一种前进", message: "今天的能量来自边界感。把不属于你的任务放回原处，把注意力留给真正重要的人和事。" },
    { name: "火种", symbol: "✺", title: "保护那个让你兴奋的念头", message: "一个还不成熟的想法值得被认真对待。先别急着证明它，给它一点不受评价的生长空间。" },
    { name: "空谷", symbol: "∿", title: "留白会让真正的答案靠近", message: "信息过载会掩盖直觉。短暂离开屏幕，散步、洗澡或发呆，反而更容易想清楚。" },
    { name: "连结", symbol: "∞", title: "一次真诚表达能改变今天", message: "不要假设别人已经知道你的感谢、困惑或在意。把它说清楚，关系会因此轻盈许多。" },
    { name: "罗盘", symbol: "⌁", title: "你已经知道更想去哪里", message: "当两个选择都看似合理，留意哪一个让你感到更开阔。身体的反应有时比论证更诚实。" },
    { name: "新页", symbol: "＋", title: "今天适合重新开始", message: "过去的失误只是旧版本的数据。调整一个规则，然后用新的方式再试一次。" }
  ];

  const doList = [
    "完成一件拖延已久的小事", "主动发起一次真诚交流", "把最难的任务提前处理", "整理桌面和数字文件",
    "记录突然出现的灵感", "去没走过的路上散步", "为一个想法做最小实验", "给自己留一段无屏幕时间",
    "认真吃一顿喜欢的饭", "复盘最近一次小胜利", "向可靠的人请求反馈", "比平时早半小时休息"
  ];

  const avoidList = [
    "在情绪上头时做决定", "同时打开太多任务", "为了完美迟迟不开始", "把别人的节奏当成标准",
    "用熬夜交换虚假的从容", "反复猜测没有发生的事", "忽略身体发出的疲劳信号", "答应自己并不想做的事",
    "在细枝末节里消耗耐心", "因一次失误否定全部进展", "把重要沟通拖到最后", "无目的地刷新信息流"
  ];

  const quests = [
    "在二十分钟内只做一件事，结束后给自己一个明确的完成标记。",
    "给一位许久没联系的人发一条没有目的、只是问候的消息。",
    "写下今天最重要的三件事，然后勇敢删掉其中一件。",
    "拍下一处此前从未认真观察过的日常风景。",
    "把脑中最吵的那个念头写成五句话，不评价，只记录。",
    "完成一个两分钟就能开始的小动作，让停滞的事情重新流动。",
    "在今天结束前，认真夸奖一个人，也认真夸奖自己一次。",
    "留出十五分钟散步，不听音乐，也不查看手机。"
  ];

  const colors = ["雾霾蓝", "落日橙", "松针绿", "月光银", "葡萄紫", "珊瑚粉", "琥珀金", "湖水青"];
  const times = ["08:20", "09:40", "11:30", "14:10", "16:40", "19:20", "21:10", "22:30"];
  const directions = ["向东", "向南", "向西", "向北", "东南方", "西南方", "抬头处", "熟悉的路上"];

  function hashString(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i += 1) {
      hash ^= value.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
  }

  function createRandom(seed) {
    return function () {
      let value = seed += 0x6D2B79F5;
      value = Math.imul(value ^ value >>> 15, value | 1);
      value ^= value + Math.imul(value ^ value >>> 7, value | 61);
      return ((value ^ value >>> 14) >>> 0) / 4294967296;
    };
  }

  function pick(items, random) {
    return items[Math.floor(random() * items.length)];
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function localDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function fortuneLevel(score) {
    if (score >= 90) return { name: "大吉", tone: "excellent" };
    if (score >= 78) return { name: "上吉", tone: "great" };
    if (score >= 65) return { name: "中吉", tone: "good" };
    if (score >= 50) return { name: "小吉", tone: "steady" };
    return { name: "蓄力", tone: "rest" };
  }

  document.addEventListener("DOMContentLoaded", function () {
    const app = document.querySelector(".fortune-app");
    if (!app) return;

    const today = new Date();
    const dateKey = localDateKey(today);
    const dateFormatter = new Intl.DateTimeFormat("zh-CN", { month: "long", day: "numeric" });
    const weekdayFormatter = new Intl.DateTimeFormat("zh-CN", { weekday: "long" });

    document.getElementById("fortune-date").textContent = dateFormatter.format(today);
    document.getElementById("fortune-weekday").textContent = weekdayFormatter.format(today);

    const nameInput = document.getElementById("fortune-name");
    const cardButtons = Array.from(document.querySelectorAll(".fortune-card"));
    const drawButton = document.getElementById("fortune-draw");
    const workspace = document.querySelector(".fortune-workspace");
    const result = document.getElementById("fortune-result");
    const resetButton = document.getElementById("fortune-reset");
    const copyButton = document.getElementById("fortune-copy");
    const copyStatus = document.getElementById("fortune-copy-status");
    let selectedCard = null;
    let latestFortune = null;

    try {
      nameInput.value = window.localStorage.getItem("fortune-name") || "";
    } catch (error) {
      // Local storage may be unavailable in privacy mode; the oracle still works.
    }

    cardButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        selectedCard = Number(button.dataset.card);
        cardButtons.forEach(function (card) {
          const isSelected = card === button;
          card.classList.toggle("is-selected", isSelected);
          card.setAttribute("aria-pressed", String(isSelected));
        });
        drawButton.disabled = false;
      });
    });

    drawButton.addEventListener("click", function () {
      if (selectedCard === null) return;

      const name = nameInput.value.trim() || "匿名旅人";
      const focusKey = document.querySelector('input[name="fortune-focus"]:checked').value;
      const focus = focusProfiles[focusKey];
      const seed = hashString(`${dateKey}|${name}|${focusKey}|${selectedCard}`);
      const random = createRandom(seed);

      try {
        window.localStorage.setItem("fortune-name", nameInput.value.trim());
      } catch (error) {
        // Saving the optional nickname is a convenience, not a requirement.
      }

      const metricKeys = ["study", "social", "creative", "energy"];
      const metrics = {};
      metricKeys.forEach(function (key) {
        const boost = focus.boost === key ? 10 : 0;
        metrics[key] = clamp(Math.round(44 + random() * 48 + boost), 32, 99);
      });

      const average = metricKeys.reduce(function (sum, key) { return sum + metrics[key]; }, 0) / metricKeys.length;
      const score = clamp(Math.round(average * 0.72 + (38 + random() * 58) * 0.28), 35, 98);
      const level = fortuneLevel(score);
      const oracle = oracleDeck[Math.floor(random() * oracleDeck.length)];
      const fortune = {
        name: name,
        focus: focus.label,
        score: score,
        level: level,
        oracle: oracle,
        metrics: metrics,
        doItem: pick(doList, random),
        avoidItem: pick(avoidList, random),
        color: pick(colors, random),
        number: 1 + Math.floor(random() * 9),
        time: pick(times, random),
        direction: pick(directions, random),
        quest: pick(quests, random)
      };

      latestFortune = fortune;
      renderFortune(fortune);
      workspace.classList.add("has-result");
      result.hidden = false;
      result.classList.remove("is-visible");
      window.requestAnimationFrame(function () {
        result.classList.add("is-visible");
      });

      if (window.matchMedia("(max-width: 760px)").matches) {
        result.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    function renderFortune(fortune) {
      const levelElement = document.getElementById("fortune-level");
      levelElement.textContent = fortune.level.name;
      levelElement.className = `fortune-level is-${fortune.level.tone}`;
      document.getElementById("fortune-result-title").textContent = fortune.oracle.title;
      document.getElementById("fortune-summary").textContent = `${fortune.name}，你今天的「${fortune.focus}」信号已经抵达。保持一点主动，也给偶然留下位置。`;
      document.getElementById("fortune-message").textContent = fortune.oracle.message;
      document.getElementById("fortune-oracle-symbol").textContent = fortune.oracle.symbol;
      document.getElementById("fortune-oracle-name").textContent = fortune.oracle.name;
      document.getElementById("fortune-score").textContent = fortune.score;
      document.getElementById("fortune-score-ring").style.setProperty("--fortune-score", `${fortune.score}%`);

      Object.keys(fortune.metrics).forEach(function (key) {
        const metric = document.querySelector(`[data-metric="${key}"]`);
        metric.querySelector("strong").textContent = fortune.metrics[key];
        metric.querySelector("i").style.width = `${fortune.metrics[key]}%`;
      });

      document.getElementById("fortune-do").textContent = fortune.doItem;
      document.getElementById("fortune-avoid").textContent = fortune.avoidItem;
      document.getElementById("fortune-color").textContent = fortune.color;
      document.getElementById("fortune-number").textContent = fortune.number;
      document.getElementById("fortune-time").textContent = fortune.time;
      document.getElementById("fortune-direction").textContent = fortune.direction;
      document.getElementById("fortune-quest").textContent = fortune.quest;
    }

    resetButton.addEventListener("click", function () {
      result.hidden = true;
      result.classList.remove("is-visible");
      workspace.classList.remove("has-result");
      selectedCard = null;
      latestFortune = null;
      drawButton.disabled = true;
      cardButtons.forEach(function (card) {
        card.classList.remove("is-selected");
        card.setAttribute("aria-pressed", "false");
      });
      copyStatus.textContent = "";
      document.getElementById("fortune-setup").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    copyButton.addEventListener("click", async function () {
      if (!latestFortune) return;
      const text = [
        `我的今日签：${latestFortune.level.name} · ${latestFortune.score}/100`,
        `签牌：${latestFortune.oracle.name}｜${latestFortune.oracle.title}`,
        `宜：${latestFortune.doItem}`,
        `忌：${latestFortune.avoidItem}`,
        `幸运色：${latestFortune.color}｜幸运数字：${latestFortune.number}`
      ].join("\n");

      try {
        await navigator.clipboard.writeText(text);
        copyStatus.textContent = "已复制，可以分享给朋友了";
      } catch (error) {
        copyStatus.textContent = "浏览器未允许复制，请手动截图保存";
      }
    });
  });
})();
