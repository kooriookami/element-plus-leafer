<script setup>
import { defineClientComponent } from 'vitepress';

const basic = defineClientComponent(() => import('../../examples/button/basic.vue'));
const disabled = defineClientComponent(() => import('../../examples/button/disabled.vue'));
const group = defineClientComponent(() => import('../../examples/button/group.vue'));
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain`、`round` 和 `circle` 来定义按钮的样式。

<basic />

::: details 查看源代码

<<< @/examples/button/basic.vue

:::

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `boolean` 类型的值。

<disabled />

::: details 查看源代码

<<< @/examples/button/disabled.vue

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `ElButtonGroup` 对多个按钮分组。

<group />

::: details 查看源代码

<<< @/examples/button/group.vue

:::
