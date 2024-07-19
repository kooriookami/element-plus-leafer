import { MathHelper } from 'leafer-ui';
import { Component } from '@element-plus-leafer/utils';
import type { ButtonGroupProps } from './types';
import type { IFlowInputData } from '@leafer-ui/interface';

export class ButtonGroup extends Component<ButtonGroupProps> {
  constructor(props: ButtonGroupProps, data?: IFlowInputData) {
    super(props, data);
  }

  public get __tag() {
    return 'ElButtonGroup';
  }

  render() {
    const children = this.props.children || [];
    const size = this.props.size || '';

    if (children.length > 1) {
      children.forEach((child, index) => {
        if (size) {
          child.props.size = size;
        }
        if (index === 0) {
          const cornerRadius = MathHelper.fourNumber(child.cornerRadius as number | number[]);
          cornerRadius[1] = 0;
          cornerRadius[2] = 0;
          child.cornerRadius = cornerRadius;
        } else if (index === children.length - 1) {
          const cornerRadius = MathHelper.fourNumber(child.cornerRadius as number | number[]);
          cornerRadius[0] = 0;
          cornerRadius[3] = 0;
          child.cornerRadius = cornerRadius;
        } else {
          child.cornerRadius = 0;
        }
      });
    }

    this.set({
      gap: 1,
      children,
    });
  }
}
