假设要创建一个标识为 `machine-learning` 的合辑。

第一步，在 `_data/series.yml` 添加：

```yaml
machine-learning:
  title: "机器学习笔记"
  description: "我的机器学习系列学习笔记。"
  cover: "/assets/images/ml-cover.jpg"
  url: "/series/machine-learning/"
  status: "连载中"
```

其中：

- `machine-learning` 是合辑的唯一标识，建议使用小写英文。
- `cover` 是首页卡片和目录页封面。
- `status` 可以写“连载中”“已完结”等，也可以删除。
- `url` 必须与下一步的 `permalink` 一致。

第二步，创建 `series/machine-learning.md`：

```yaml
---
layout: series
title: "机器学习笔记"
series: machine-learning
permalink: /series/machine-learning/
excerpt: "我的机器学习系列学习笔记。"
---
```

第三步，在属于该合辑的每篇文章头部添加：

```yaml
series: machine-learning
series_order: 1
```

下一篇则写：

```yaml
series: machine-learning
series_order: 2
```

`series_order` 决定目录和上一篇/下一篇的顺序，最好从 1 开始且不要重复。完成这些配置后，首页合并、目录生成和文章翻页都会自动生效。

需要让文章恢复为普通文章时，只需删除文章中的：

```yaml
series: machine-learning
series_order: 1
```