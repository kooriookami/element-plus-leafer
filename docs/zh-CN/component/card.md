<script setup>
import { defineClientComponent } from 'vitepress';

const Basic = defineClientComponent(() => import('../../examples/card/basic.vue'));
const Simple = defineClientComponent(() => import('../../examples/card/simple.vue'));
const Image = defineClientComponent(() => import('../../examples/card/image.vue'));
const Shadow = defineClientComponent(() => import('../../examples/card/shadow.vue'));
</script>

# Card 卡片

将信息聚合在卡片容器中展示。

## 基础用法

卡片包含标题，内容以及操作区域。

Card 组件由 `header`、`body` 和 `footer` 组成。其中 `header` 和 `footer` 是可选的，其内容可以是字符串或 Leafer 元素。

<Basic />

::: details 查看源代码

<<< @/examples/card/basic.vue

:::

## 简单卡片

卡片可以只有内容区域。

<Simple />

::: details 查看源代码

<<< @/examples/card/simple.vue

:::

## 有图片内容的卡片

可配置定义更丰富的内容展示。

<Image />

::: details 查看源代码

<<< @/examples/card/image.vue

:::

## 带有阴影效果的卡片

你可以定义什么时候展示卡片的阴影效果。

通过 `shadow` 属性设置卡片阴影出现的时机。该属性的值可以是：`always`、`hover` 或 `never`。

<Shadow />

::: details 查看源代码

<<< @/examples/card/shadow.vue

:::

## Card Props

| 属性名      | 说明       | 类型                                   | 默认值      |
|----------|----------|--------------------------------------|----------|
| header   | 卡片标题     | `string` \| `IUIInputData`           | —        |
| footer   | 卡片页脚     | `string` \| `IUIInputData`           | —        |
| children | 自定义默认内容  | `IUIInputData[]`                     | —        |
| shadow   | 卡片阴影显示时机 | `'always'` \| `'never'` \| `'hover'` | 'always' |
