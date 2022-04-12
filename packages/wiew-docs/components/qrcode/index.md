# Qrcode 二维码

二维码组件可快速生成二维码，通过传入参数，可以做成普通二维码和带 logo 二维码

## 基本用法

:::demo 基本使用，传入 value 为二维码内容

```vue
<template>
  <w-qrcode value="hhhhh"></w-qrcode>
</template>
```

:::

## 修改普通二维码

二维码组件基于`qrcode`库搭建，可通过`options`选项对二维码进行修改

<!-- :::demo 通过 options 修改

```vue
<template>
  <w-qrcode :options="options"></w-qrcode>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ref({
  color: {
    dark: "#00ff00",
  },
});
</script>
```

::: -->
