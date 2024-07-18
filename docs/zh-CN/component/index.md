# 简介

组件本身是支持原生 TypeScript 的，为了方便演示，文档使用了 Vue 3 做演示。

所有组件都是基于 Leafer UI 的 [Flow](https://leaferjs.com/ui/guide/plugin/flow/Flow.html) 元素，所以你可以在组件中使用任何 Flow 的功能。

如果你也想封装一个组件，可以继承 [Component](https://github.com/kooriookami/element-plus-leafer/blob/master/packages/utils/components.ts) 抽象类，然后实现 render
方法。具体代码可以参考 [Button](https://github.com/kooriookami/element-plus-leafer/blob/master/packages/components/button/src/button.ts) 组件。
