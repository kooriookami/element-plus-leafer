# 简介

组件本身是支持原生 TypeScript 的，为了方便演示，文档使用了 Vue 3 做演示。

所有组件都是基于 Leafer UI 的 [Flow](https://leaferjs.com/ui/guide/plugin/flow/Flow.html) 元素，所以你可以在组件中使用任何 Flow 的功能。

如果你也想封装一个组件，可以继承 [Component](https://github.com/kooriookami/element-plus-leafer/blob/master/packages/utils/components.ts) 抽象类，然后实现 render
方法。具体代码可以参考 [Button](https://github.com/kooriookami/element-plus-leafer/blob/master/packages/components/button/src/button.ts) 组件。

## 通用属性

以 Button 组件为例，我们需要先创建一个实例。构造函数接受两个对象，第一个是 `props`，第二个是 `data`。

`props` 是 Button 组件的属性，每个组件的属性不同，该组件属性类型是 `ButtonProps`。

`data` 是 Flow 元素的属性，类型是 `IFlowInputData`，能够直接修改元素，可以不传。

```ts
const button = new ElButton(
  { text: 'Hello World!', type: 'primary' },
  { x: 20, y: 20 },
);
```

## 通用方法

如果想修改组件的属性，可以使用组件提供的 `setProps` 方法，也可以直接修改 `props` 属性。

```ts
const button = new ElButton({ text: 'Hello World!', type: 'primary' });
button.setProps({ loading: true });
button.props.loading = false;
```

如果想直接修改 Flow 元素，可以使用元素提供的 `set` 方法，也可以直接修改元素属性。

```ts
const button = new ElButton({ text: 'Hello World!', type: 'primary' });
button.set({ x: 20 });
button.y = 20;
```
