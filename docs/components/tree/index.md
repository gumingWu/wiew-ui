---
category: Show
sidebar: Tree 树组件
---

# Tree 树组件

:::demo
```vue
<template>
  <w-tree :data="data"></w-tree>
</template>

<script setup>
const data = [
  {
    label: '一级 1', level: 1,
    children: [
      {
        label: '二级 1-1', level: 2,
        children: [
          {
            label: '三级 1-1-1', level: 3,
          }
        ]
      }
    ]
  }, 
  {
    label: '一级 2', level: 1,
    open: false,
    children: [
      {
        label: '二级 2-1', level: 2,
        children: [{
          label: '三级 2-1-1', level: 3,
        }]
      }, 
      {
        label: '二级 2-2', level: 2,
        children: [
          {
            label: '三级 2-2-1', level: 3,
          }
        ]
      }
    ]
  }, 
  {
  label: '一级 3', level: 1,
  open: true,
  children: [{
    label: '二级 3-1', level: 2,
    children: [{
      label: '三级 3-1-1', level: 3,
    }]
  }, {
    label: '二级 3-2', level: 2,
    children: [{
      label: '三级 3-2-1', level: 3,
    }]
  }]
  }
  , 
  {
  label: '一级 4', level: 1,
  }
]
</script>
```
:::

## Tree属性

:::class w-doc-table

|属性|说明|类型|可选值|默认值|
|----|----|-----|-----|--------|
|data|需要展示的Tree数据|TreeItem[]|——|[]|

:::

## Tree事件

:::class w-doc-table

|事件名|说明|参数|
|-----|----|---|
|click|点击单个树节点回调|返回点击tree节点value|

:::
