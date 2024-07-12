import { Box, Text } from 'leafer-ui';
import { presetFont } from '@element-plus-leafer/constants';

export function resetAttr() {
  Text.changeAttr('fontFamily', presetFont);
}

export abstract class Component<Props extends Record<string, any>> extends Box {
  props: Props;

  protected constructor(props: Props) {
    super();
    resetAttr();
    this.props = this.proxyProps(props);
    this.render();
  }

  proxyProps(props: Props) {
    const that = this;
    return new Proxy(props, {
      set(obj, prop, value) {
        obj[prop as keyof Props] = value;
        that.render();
        return true;
      },
    });
  };

  setProps(props: Partial<Props>) {
    Object.assign(this.props, props);
  }

  render() {
    // need to be overridden
  }
}
