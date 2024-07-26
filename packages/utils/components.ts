import { Text } from 'leafer-ui';
import { Flow } from '@leafer-in/flow';
import '@leafer-in/state';
import '@leafer-in/flow';
import { FontFamily } from '@element-plus-leafer/constants';
import type { IFlowInputData } from '@leafer-ui/interface';

export function resetAttr() {
  Text.changeAttr('fontFamily', FontFamily);
}

export abstract class Component<Props extends Record<string, any>> extends Flow {
  props: Props;

  protected constructor(props: Props, data?: IFlowInputData) {
    super(data);
    resetAttr();
    this.props = this.proxyProps(props);
    this.render();
  }

  proxyProps(props: Props) {
    return new Proxy(props, {
      set: (obj, prop, value) => {
        obj[prop as keyof Props] = value;
        this.render();
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
