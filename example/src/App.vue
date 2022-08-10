<script setup>
import { ref } from 'vue'

const msg = ref('1111111haaaahasdaaaasdash1111222')
</script>

<template>
  {{ msg }}
  <WButton size="large">aaa</WButton>
  <WButton size="middle">bbb</WButton>
  <WButton size="small">ccc</WButton>
  <WButton size="small" type="dashed">small</WButton>
  <WButton size="small" status="danger">small</WButton>
  <WInput></WInput>
</template>