---
category: Show
sidebar: Modal 模态框
---

# Modal 模态框

:::demo
```vue
<template>
  <w-modal :show="show" @close="close">
    <template #header>
      <h1>哈哈哈</h1>
    </template>
  </w-modal>
  <w-button @click="open">打开</w-button>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)

const open = () => {
  show.value = true
}
const close = () => {
  console.log(1);
  show.value = false
}
</script>
```
:::