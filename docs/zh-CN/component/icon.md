<script setup>
import { defineClientComponent } from 'vitepress';

const Basic = defineClientComponent(() => import('../../examples/icon/basic.vue'));
</script>

# Icon 图标

## 基础用法

`icon` 可以传入一个图片路径，或者 SVG 的字符串。

::: tip
只有当传入 SVG 字符串时，`color` 才会生效。在 Vite 项目中，以 `?raw` 后缀引入可以获取文件字符串。

```ts
import Edit from '@element-plus/icons-svg/edit.svg'; // [!code --]
import Edit from '@element-plus/icons-svg/edit.svg?raw'; // [!code ++]
```

:::

设置 `loading`，你的图标就可以在 2 秒内旋转 360 度。

<Basic />

::: details 查看源代码

<<< @/examples/icon/basic.vue

:::

## 图标集合

推荐使用 Element Plus 的[官方图标](https://element-plus.org/zh-CN/component/icon.html#icon-collection)，原始 SVG 文件请安装 `@element-plus/icons-svg`。

## Icon Props

| 属性名     | 说明      | 类型        | 默认值   |
|---------|---------|-----------|-------|
| icon    | 图标      | `string`  | —     |
| color   | SVG 的颜色 | `string`  | —     |
| size    | SVG 的尺寸 | `number`  | —     |
| loading | 是否旋转    | `boolean` | false |
