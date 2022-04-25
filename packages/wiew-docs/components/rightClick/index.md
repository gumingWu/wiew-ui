# 定制右键

提供一个快捷的定制右键组件，通过传入的 item，可以对右键菜单定制化

## 基本使用

:::demo

```vue
<template>
  <w-right-click :menu="menu"></w-right-click>
</template>

<script setup lang="ts">
import { ref } from "vue";

const menu = [
  {
    label: "功能一",
  },
  {
    label: "功能二",
  },
];
</script>
```

:::

## 更换插槽

:::demo 可以通过 slot 进行内部组件替换，初始是 button

```vue
<template>
  <w-right-click>
    <h2>哈哈哈</h2>
  </w-right-click>
</template>
```

:::
