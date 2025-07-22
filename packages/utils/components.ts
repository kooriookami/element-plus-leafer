import { Text, Flow } from 'leafer';
import { FontFamily, FontSize, TextColor } from '@element-plus-leafer/constants';
import type { IFlowInputData } from 'leafer';

export function resetAttr() {
  Text.changeAttr('fontFamily', FontFamily);
  Text.changeAttr('fontSize', FontSize.default);
  Text.changeAttr('fill', TextColor.primary);
}

export abstract class Component<Props extends Record<string, any>> extends Flow {
  props: Props;

  protected constructor(props: Props, data?: IFlowInputData) {
    super(data);
    resetAttr();
    this.props = this.proxyProps(props);
    this.render();
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          this.render();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      subtree: false,
    });
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
