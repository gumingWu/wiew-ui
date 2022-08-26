---
category: Show
sidebar: Modal 模态框
---

# Modal 模态框

利用`vue3`提供的组件`Teleport`，实现将`Modal`组件挂载到`body`标签下，避免样式问题导致的`Modal`错位

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
  show.value = false
}
</script>
```
:::