import { Text } from 'leafer-ui';
import { Flow } from '@leafer-in/flow';
import '@leafer-in/state';
import '@leafer-in/flow';
import { FontFamily } from '@element-plus-leafer/constants';

export function resetAttr() {
  Text.changeAttr('fontFamily', FontFamily);
}

export abstract class Component<Props extends Record<string, any>> extends Flow {
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
