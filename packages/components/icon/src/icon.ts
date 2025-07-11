import { Platform } from 'leafer';
import { Component } from '@element-plus-leafer/utils';
import { TextColor } from '@element-plus-leafer/constants';
import type { IconProps } from './types';
import type { IFlowInputData } from 'leafer';

export const isSvg = (value: string) => {
  return /<svg.*?>.*?<\/svg>/.test(value);
};

export const fillSvg = (value: string, color: string = TextColor.primary) => {
  if (!isSvg(value)) {
    return value;
  }
  if (/fill=".*?"/.test(value)) {
    return value.replace(/fill=".*?"/g, `fill="${color}"`);
  }
  return value.replace(/<svg /g, `<svg fill="${color}" `);
};

export class Icon extends Component<IconProps> {
  constructor(props: IconProps, data?: IFlowInputData) {
    super(props, data);
  }

  public get __tag() {
    return 'ElIcon';
  }

  render() {
    const { icon = '', color, size, loading } = this.props;

    this.set({
      flow: false,
      width: size,
      height: size,
      visible: !!icon || 0,
      overflow: 'hide',
      children: [
        {
          tag: 'Rect',
          fill: {
            type: 'image',
            url: isSvg(icon) ? Platform.toURL(fillSvg(icon, color), 'svg') : icon,
            mode: 'fit',
          },
          origin: 'center',
          width: size,
          height: size,
          animation: loading ? {
            style: {
              rotation: 360,
            },
            easing: 'linear',
            duration: 2,
            loop: true,
          } : undefined,
        },
      ],
    });
  }
}
