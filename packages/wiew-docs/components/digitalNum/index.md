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


## 更改字体样式
可以添加`style`或`class`改变字体样式

:::demo
```vue
<template>
  <w-digital-num style="font-size: 600" :value="num"></w-digital-num>
</template>

<script setup>
const num = 1000
</script>
```
:::

## 动态切换数字
可以用动画的形式改变数字，推荐使用requestAnimateFrame(raF)

### setInterval
:::demo
```vue
<template>
  <w-digital-num :value="num"></w-digital-num>
  <div>
    <w-button @click="stop">stop</w-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1000)

const id = setInterval(() => {
  num.value += 1
}, 1000)
const stop = () => {
  clearInterval(id)
}
</script>
```
:::

### requestAnimationFrame
:::demo
```vue
<template>
  <w-digital-num :value="num"></w-digital-num>
  <div>
    <w-button @click="stop">stop</w-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num = ref(1000)

let start = null
const loop = (timestamp) => {
  if(!start)
    start = timestamp
  const delay = timestamp - start
  if(delay > 1000) {
    num.value += 1
    start = timestamp
  }
  id = requestAnimationFrame(loop)
}
let id = requestAnimationFrame(loop)

const stop = () => {
  cancelAnimationFrame(id)
}
</script>
```
:::