# DigitalNum 动效数字

:::demo

```vue
<template>
  <w-digital-num
    :value="num"
    :interval="interval"
    :dislocation="dislocation"
    :use-grouping="useGrouping"
  ></w-digital-num>
</template>

<script setup>
import { ref } from "vue";

const num = ref(2000);
const interval = 500;
const dislocation = false;
const useGrouping = false;
</script>
```

:::
