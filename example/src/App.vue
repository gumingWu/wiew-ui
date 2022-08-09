<script setup>
import { ref } from 'vue'

const msg = ref('hhasdasdash')
</script>

<template>
  {{ msg }}
  <WButton>slots咯</WButton>
  <WInput></WInput>
</template>