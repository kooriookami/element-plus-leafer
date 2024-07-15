import { Platform } from 'leafer-ui';
import { Component } from '@element-plus-leafer/utils';
import type { IconProps } from './types';

export const isSvg = (value: string) => {
  return /<svg.*?>.*?<\/svg>/.test(value);
};

export const fillSvg = (value: string, color?: string) => {
  if (!isSvg(value) || !color) {
    return value;
  }
  if (/fill=".*?"/.test(value)) {
    return value.replace(/fill=".*?"/g, `fill="${color}"`);
  }
  return value.replace(/<svg /g, `<svg fill="${color}" `);
};

export class Icon extends Component<IconProps> {
  constructor(props: IconProps) {
    super(props);
  }

  public get __tag() {
    return 'ElIcon';
  }

  render() {
    const { icon, color, size } = this.props;

    this.set({
      children: [
        {
          tag: 'Image',
          url: isSvg(icon) ? Platform.toURL(fillSvg(icon, color), 'svg') : icon,
          format: 'svg',
          height: size,
          width: size,
        },
      ],
    });
  }
}
