<script setup>
import { defineClientComponent } from 'vitepress';

const Basic = defineClientComponent(() => import('../../examples/button/basic.vue'));
const Disabled = defineClientComponent(() => import('../../examples/button/disabled.vue'));
const Link = defineClientComponent(() => import('../../examples/button/link.vue'));
const Group = defineClientComponent(() => import('../../examples/button/group.vue'));
const Icon = defineClientComponent(() => import('../../examples/button/icon.vue'));
const Loading = defineClientComponent(() => import('../../examples/button/loading.vue'));
const Size = defineClientComponent(() => import('../../examples/button/size.vue'));
const Custom = defineClientComponent(() => import('../../examples/button/custom.vue'));
const Event = defineClientComponent(() => import('../../examples/button/event.vue'));
</script>

# Button 按钮

常用的操作按钮。

::: warning
目前存在已知 BUG，存在的问题后续会继续优化。
:::

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

## 图标按钮

使用图标为按钮添加更多的含义。 你也可以单独使用图标不添加文字来节省显示区域占用。

使用 `icon` 属性来为按钮添加图标。

<Icon />

::: details 查看源代码

<<< @/examples/button/icon.vue

:::

## 按钮组

以按钮组的方式出现，常用于多项类似操作。

使用 `ElButtonGroup` 对多个按钮分组。

<Group />

::: details 查看源代码

<<< @/examples/button/group.vue

:::

## 加载状态按钮

点击按钮来加载数据，并向用户反馈加载状态。

通过设置 `loading` 属性为 `true` 来显示加载中状态。

<Loading />

::: details 查看源代码

<<< @/examples/button/loading.vue

:::

## 调整尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `large` 和 `small` 两种值。

<Size />

::: details 查看源代码

<<< @/examples/button/size.vue

:::

## 自定义颜色

你可以自定义按钮的颜色。

我们将自动计算按钮不同状态时的颜色。

<Custom />

::: details 查看源代码

<<< @/examples/button/custom.vue

:::

## 交互事件

按钮默认提供一个 `onClick` 点击事件，如果你需要其他事件，可以参考 Leafer UI 的[交互事件](https://leaferjs.com/ui/guide/event/ui/Pointer.html)。

<Event />

::: details 查看源代码

<<< @/examples/button/event.vue

:::

## Button Props

| 属性名         | 说明           | 类型                                                                          | 默认值     |
|-------------|--------------|-----------------------------------------------------------------------------|---------|
| text        | 文本           | `string`                                                                    | —       |
| size        | 尺寸           | `'large'` \| `'default'` \| `'small'` \| `''`                               | —       |
| type        | 类型           | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'info'` \| `''` | —       |
| plain       | 是否为朴素按钮      | `boolean`                                                                   | false   |
| link        | 是否为链接按钮      | `boolean`                                                                   | false   |
| round       | 是否为圆角按钮      | `boolean`                                                                   | false   |
| circle      | 是否为圆形按钮      | `boolean`                                                                   | false   |
| loading     | 是否为加载中状态     | `boolean`                                                                   | false   |
| loadingIcon | 自定义加载中状态图标组件 | `string`                                                                    | Loading |
| disabled    | 按钮是否为禁用状态    | `boolean`                                                                   | false   |
| icon        | 图标组件         | `string`                                                                    | —       |
| color       | 自定义按钮颜色      | `string`                                                                    | —       |
| children    | 自定义额外内容      | `IUIInputData[]`                                                            | —       |
| onClick     | 点击事件         | `Function`                                                                  | —       |

## ButtonGroup Props

| 属性名      | 说明             | 类型                                                                          | 默认值 |
|----------|----------------|-----------------------------------------------------------------------------|-----|
| size     | 用于控制该按钮组内按钮的大小 | `'large'` \| `'default'` \| `'small'` \| `''`                               | —   |
| type     | 用于控制该按钮组内按钮的类型 | `'primary'` \| `'success'` \| `'warning'` \| `'danger'` \| `'info'` \| `''` | —   |
| children | 	自定义按钮组按钮      | `ButtonInstance[]`                                                          | —   |
