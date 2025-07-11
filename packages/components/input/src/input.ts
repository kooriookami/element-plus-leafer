import { BorderColor, BorderRadius, ComponentSize, FontSize, TextColor } from '@element-plus-leafer/constants';
import { Component, defineMap } from '@element-plus-leafer/utils';
import type { InputProps } from './types';
import type { IFlowInputData } from 'leafer';

export const Padding = defineMap({
  large: [0, 16],
  default: [0, 12],
  small: [0, 8],
});

export class Input extends Component<InputProps> {
  constructor(props: InputProps, data?: IFlowInputData) {
    super(props, data);
  }

  public get __tag() {
    return 'ElInput';
  }

  render() {
    const {
      size = '',
    } = this.props;

    this.set({
      height: ComponentSize[size],
      width: 240,
      padding: Padding[size],
      stroke: BorderColor.base,
      strokeWidth: 1,
      cornerRadius: BorderRadius[size],
      flowAlign: 'left',
      transition: {
        duration: 0.3,
      },
      hoverStyle: {
        stroke: TextColor.disabled,
        cursor: 'text',
      },
      children: [
        {
          tag: 'Text',
          text: '',
          fill: TextColor.regular,
          fontSize: FontSize[size],
          placeholder: '请输入',
          placeholderColor: TextColor.placeholder,
          editable: true,
        },
      ],
    });
  }
}
