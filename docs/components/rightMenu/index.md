---
category: Show
sidebar: RightMenu 右键菜单
---

# RightMenu 右键菜单

:::demo
```vue
<template>
  <w-right-menu :menu="menu">
    哈哈哈
  </w-right-menu>
</template>

<script>
export default {
  setup() {
    const menu = [
      {
        title: '我是菜单一',
        callback: () => {}
      },
      {
        title: '我是菜单二',
        callback: () => {}
      },
      {
        title: '我是菜单三',
        callback: () => {}
      },
    ]

    return {
      menu
    }
  }
}
</script>
```
:::
