---
category: Experiment
sidebar: VirtualScroll 虚拟列表
---

# VirtualScroll 虚拟列表


:::demo
```vue
<template>
  <w-virtual-scroll :listData="d"></w-virtual-scroll>
</template>

<script setup>
let d = [];
for (let i = 0; i < 1000; i++) {
  d.push({ id: i, value: i });
}
</script>
```
:::