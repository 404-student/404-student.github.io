// 基于日期生成稳定随机数
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// 生成今日运势
function generateFortune() {
  const today = new Date();
  const dateStr = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
  
  // 设置日期显示
  document.getElementById('fortune-date').textContent = dateStr;
  
  // 使用日期作为随机种子
  const seed = today.getTime();
  const rand = seededRandom(seed);
  
  // 运势等级 (类似洛谷)
  const levels = [
    { name: "大吉", class: "great-fortune", min: 90, max: 100 },
    { name: "吉", class: "good-fortune", min: 70, max: 89 },
    { name: "中吉", class: "normal-fortune", min: 40, max: 69 },
    { name: "凶", class: "bad-fortune", min: 0, max: 39 }
  ];
  
  // 生成幸运指数
  const score = Math.floor(rand * 100);
  
  // 确定运势等级
  let level = levels[0];
  for (const l of levels) {
    if (score >= l.min && score <= l.max) {
      level = l;
      break;
    }
  }
  
  // 设置运势等级
  const levelElement = document.getElementById('fortune-level');
  levelElement.textContent = level.name;
  levelElement.className = "fortune-level " + level.class;
  
  // 设置运势分数
  document.getElementById('fortune-score').textContent = `幸运指数: ${score}/100`;
  
  // 随机建议
  const advices = [
    "今天适合刷算法题！",
    "想玩狼人杀但是凑不出12个人",
    "熬夜赶工完成ddl！",
    "王者五排dd",
    "重温一张经典Hiphop专辑！",
    "学习一种新的数据结构",
    "或许会被喜欢的人表白呢",
    "适合充满奇思妙想的一天",
    "在mc里淘一个超级好玩的模组",
    "天气不错！和朋友一起出去玩吧",
    "今天会有意想不到的惊喜发生！期待吧",
    "我累了，不想对你说任何话"
  ];
  
  const adviceIndex = Math.floor(seededRandom(seed * 2) * advices.length);
  document.getElementById('fortune-advice').textContent = advices[adviceIndex];
  
  // 特殊提示
  const tips = [
    "注意边界条件处理",
    "小心数组越界错误",
    "别忘了时间复杂度分析",
    "多考虑几个测试用例",
    "递归记得设置终止条件",
    "检查你的变量命名",
    "注意内存使用情况",
    "考虑使用更优雅的解法",
    "别忘了写注释",
    "先设计再编码",
    "测试驱动开发是个好习惯",
    "代码可读性很重要"
  ];
  
  const tipIndex = Math.floor(seededRandom(seed * 3) * tips.length);
  document.getElementById('fortune-tip').textContent = `✨ 提示: ${tips[tipIndex]}`;
  
  // 显示运势结果
  document.getElementById('fortune-result').style.display = 'block';
  
  // 修改按钮文本
  const button = document.querySelector('.fortune-button');
  button.textContent = '不是我喜欢的运势，直接重测';
}
