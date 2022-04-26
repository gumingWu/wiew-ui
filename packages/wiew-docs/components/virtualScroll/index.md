# VirtualScroll 虚拟滚动

## 基本使用

:::demo

```vue
<template>
  <w-virtual-scroll :items="list" :item-height="30" :height="300" :width="300">
    <template #default="{ item }">
      <div class="demo-item">{{ item.title }}</div>
    </template>
  </w-virtual-scroll>
</template>

<script setup>
const list = [];
for (let i = 0; i < 1000; i++) {
  list.push({
    title: `列表项${i}`,
  });
}
</script>

<style>
.demo-item {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
</style>
```

:::
