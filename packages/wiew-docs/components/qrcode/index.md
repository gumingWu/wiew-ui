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

:::demo 通过 options 修改

```vue
<template>
  <w-qrcode value="xxx" :options="options"></w-qrcode>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ref({
  color: {
    dark: "#4400ff",
  },
});
</script>
```

:::

## 动态变化的二维码

对于传入的 props，二维码组件会开启一个监听，如果里面的值发生变化，就会重新渲染生成二维码

:::demo 定义一个响应式 value，然后传入

```vue
<template>
  <w-qrcode :value="val"></w-qrcode>
  <div>
    {{ val }}
    <w-button @click="reset">重置</w-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const val = ref("会变的数据");
const count = ref(0);

let timer = setInterval(() => {
  val.value += "+";
  count.value++;
}, 3000);

watch(count, (newVal) => {
  if (newVal === 5) {
    clearInterval(timer);
  }
});

const reset = () => {
  count.value = 0;
  val.value = "会变的数据";
  timer = setInterval(() => {
    val.value += "+";
    count.value++;
  }, 3000);
};
</script>
```

:::
