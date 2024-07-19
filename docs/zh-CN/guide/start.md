# 快速开始

## 安装

::: code-group

```sh [npm]
$ npm install element-plus-leafer
```

```sh [pnpm]
$ pnpm add element-plus-leafer
```

```sh [yarn]
$ yarn add element-plus-leafer
```

```sh [bun]
$ bun add element-plus-leafer
```

:::

## 浏览器

需要引入 Leafer UI 以及相关子库。

```html
<script src="https://unpkg.com/leafer-ui"></script>
<script src="https://unpkg.com/@leafer-in/flow"></script>
<script src="https://unpkg.com/@leafer-in/state"></script>
<script src="https://unpkg.com/element-plus-leafer"></script>
<script>
  const { Leafer } = LeaferUI;
  const { ElButton } = ElementPlusLeafer;
  // ...
</script>
```

## 兼容性

Element Plus Leafer 支持所有现代浏览器，默认语法为 ES2020。

如果需要支持旧版浏览器，请自行添加 [Babel](https://babeljs.io) 和相应的 Polyfill。

由于使用了 `Proxy` 方法，最低转义语法为 ES2015，固不支持 IE。

## 开始体验（CDN 暂时有问题，请使用包管理器安装）

下面是一个完整的 CDN 使用示例。[在线演示](https://codepen.io/kooriookami/pen/OJeNPLp)

<iframe height="400" width="100%" src="https://codepen.io/kooriookami/embed/OJeNPLp?theme-id=light&default-tab=html,result" frameborder="no"></iframe>
