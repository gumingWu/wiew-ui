# Button 按钮

## 基本使用

:::demo 基本使用

```vue
<template>
  <w-button>按钮</w-button>
</template>
```

:::

## 多种风格

:::demo 通过 variant 设置不同类型按钮

```vue
<template>
  <div style="display: flex; justify-content: space-between">
    <w-button variant="primary">按钮</w-button>
    <w-button variant="success">按钮</w-button>
    <w-button variant="warning">按钮</w-button>
    <w-button variant="danger">按钮</w-button>
    <w-button variant="text">按钮</w-button>
    <w-button variant="text-dark">按钮</w-button>
    <w-button variant="common">按钮</w-button>
  </div>
</template>
```

:::

## 禁用状态

:::demo 通过 disabled 设置禁用

```vue
<template>
  <w-button :disabled="true">按钮</w-button>
</template>
```

:::

## 设置不同宽度

:::demo

```vue
<template>
  <w-button width="100px">按钮</w-button>
  <w-button width="200px">按钮</w-button>
  <w-button width="300px">按钮</w-button>
</template>
```

:::
