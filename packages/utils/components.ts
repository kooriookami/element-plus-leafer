import { Box } from 'leafer-ui';

export abstract class Component<Props extends Record<string, any>> extends Box {
  props: Props;

  protected constructor(props: Props) {
    super();
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
