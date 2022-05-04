# DigitalNum 动效数字

## 基本使用

通过 `value` 传入需要动态展示的数字
:::demo

```vue
<template>
  <w-digital-num :value="num"></w-digital-num>
</template>

<script setup>
const num = 1000;
</script>
```

:::

## 更改动态变动的效果

通过 `interval` 更改展示的频次
:::demo

```vue
<template>
  <w-digital-num :value="num" :interval="interval"></w-digital-num>
</template>

<script setup>
const num = 1000;
const interval = 3000;
</script>
```

:::
