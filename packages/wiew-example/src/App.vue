<script setup>
const msg = "hhh";
const list = [];
for (let i = 0; i < 1000; i++) {
  list.push({
    title: `列表项${i}`,
  });
}
</script>

<template>
  <div>{{ msg }}</div>
  <!-- <w-button>hhh</w-button>
  <w-input></w-input>
  <div>
    <w-virtual-scroll
      :items="list"
      :item-height="30"
      :height="300"
      :width="300"
    >
      <template #default="{ item }">
        <div class="demo-item">{{ item.title }}</div>
      </template>
    </w-virtual-scroll>
  </div> -->
</template>

<style>
.demo-item {
  height: 40px;
  padding: 0 20px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
}
</style>
