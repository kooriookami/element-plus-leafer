<script setup>
import { defineClientComponent } from 'vitepress';

const Basic = defineClientComponent(() => import('../../examples/button/basic.vue'));
const Disabled = defineClientComponent(() => import('../../examples/button/disabled.vue'));
const Link = defineClientComponent(() => import('../../examples/button/link.vue'));
const Group = defineClientComponent(() => import('../../examples/button/group.vue'));
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<Basic />

::: details 查看源代码

<<< @/examples/button/basic.vue

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `boolean` 类型的值。

<Disabled />

::: details 查看源代码

<<< @/examples/button/disabled.vue

:::

## 链接按钮

<Link />

::: details 查看源代码

<<< @/examples/button/link.vue

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `ElButtonGroup` 对多个按钮分组。

<Group />

::: details 查看源代码

<<< @/examples/button/group.vue

:::

## Button API

### Button Attributes

| 属性名          | 说明           | 类型                                                                          | 默认值     |
|--------------|--------------|-----------------------------------------------------------------------------|---------|
| text         | 文本           | `string`                                                                    | —       |
| size         | 尺寸           | `'large'` \| `'default'` \| `'small'` \| `''`                               | —       |
| type         | 类型           | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'info'` \| `''` | —       |
| plain        | 是否为朴素按钮      | `boolean`                                                                   | false   |
| link         | 是否为链接按钮      | `boolean`                                                                   | false   |
| round        | 是否为圆角按钮      | `boolean`                                                                   | false   |
| circle       | 是否为圆形按钮      | `boolean`                                                                   | false   |
| loading      | 是否为加载中状态     | `boolean`                                                                   | false   |
| loading-icon | 自定义加载中状态图标组件 | ^[string] / ^[Component]                                                    | Loading |
| disabled     | 按钮是否为禁用状态    | `boolean`                                                                   | false   |
| icon         | 图标组件         | `string`                                                                    | —       |
