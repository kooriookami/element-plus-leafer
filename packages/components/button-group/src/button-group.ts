import { Flow } from '@leafer-in/flow';
import { Component } from '@element-plus-leafer/utils';
import type { ButtonGroupProps } from './types';

function getCornerRadius(cornerRadius: any) {
  if (Array.isArray(cornerRadius)) {
    return cornerRadius[0];
  }
  return cornerRadius;
}

export class ButtonGroup extends Component<ButtonGroupProps> {
  constructor(props: ButtonGroupProps) {
    super(props);
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
          const cornerRadius = getCornerRadius(child.cornerRadius);
          child.cornerRadius = [cornerRadius, 0, 0, cornerRadius];
        } else if (index === children.length - 1) {
          const cornerRadius = getCornerRadius(child.cornerRadius);
          child.cornerRadius = [0, cornerRadius, cornerRadius, 0];
        } else {
          child.cornerRadius = 0;
        }
      });
    }

    this.set({
      children: [
        new Flow({
          gap: 1,
          children,
        }),
      ],
    });
  }
}
