import { PointerEvent } from 'leafer-ui';
import '@leafer-in/state';
import { BorderColor, Color, TextColor, ComponentSize, BorderRadius, FontSize } from '@element-plus-leafer/constants';
import { Component, darken, NOOP, lighten, isSameColor, defineMap } from '@element-plus-leafer/utils';
import type { ButtonProps } from './types';

export const TextPadding = defineMap({
  'large': [13, 20],
  'default': [9, 16],
  'small': [6, 12],
});

export const buttonVariant = (type: ButtonProps['type']) => defineMap({
  default: {
    fill: type ? Color[type] : Color.white,
    stroke: type ? Color[type] : BorderColor.default,
    textFill: type ? Color.white : TextColor.regular,
  },
  hover: {
    fill: type ? lighten(Color[type], 30) : lighten(Color.primary, 90),
    stroke: type ? lighten(Color[type], 30) : lighten(Color.primary, 70),
    textFill: type ? Color.white : Color.primary,
  },
  press: {
    fill: type ? darken(Color[type], 20) : lighten(Color.primary, 90),
    stroke: type ? darken(Color[type], 20) : Color.primary,
    textFill: type ? Color.white : Color.primary,
  },
  disabled: {
    fill: type ? lighten(Color[type], 50) : Color.white,
    stroke: type ? lighten(Color[type], 50) : BorderColor.light,
    textFill: type ? Color.white : TextColor.placeholder,
  },
});

export const buttonPlain = (type: ButtonProps['type']) => defineMap({
  default: {
    fill: type ? lighten(Color[type], 90) : Color.white,
    stroke: type ? lighten(Color[type], 50) : BorderColor.default,
    textFill: type ? Color[type] : TextColor.regular,
  },
  hover: {
    fill: type ? Color[type] : Color.white,
    stroke: type ? Color[type] : Color.primary,
    textFill: type ? Color.white : Color.primary,
  },
  press: {
    fill: type ? darken(Color[type], 20) : Color.white,
    stroke: type ? darken(Color[type], 20) : Color.primary,
    textFill: type ? Color.white : Color.primary,
  },
  disabled: {
    fill: type ? lighten(Color[type], 90) : Color.white,
    stroke: type ? lighten(Color[type], 80) : BorderColor.light,
    textFill: type ? lighten(Color[type], 50) : TextColor.placeholder,
  },
});

export const buttonLink = (type: ButtonProps['type']) => defineMap({
  default: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: type ? Color[type] : TextColor.regular,
  },
  hover: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: type ? lighten(Color[type], 50) : TextColor.secondary,
  },
  press: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: type ? darken(Color[type], 20) : TextColor.primary,
  },
  disabled: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: type ? lighten(Color[type], 50) : TextColor.placeholder,
  },
});

export const getColor = (props: ButtonProps) => {
  const { type, plain, link } = props;

  const color = (status: 'default' | 'hover' | 'press' | 'disabled', field: 'fill' | 'stroke' | 'textFill') => {
    if (plain) {
      return buttonPlain(type)[status][field];
    } else if (link) {
      return buttonLink(type)[status][field];
    } else {
      return buttonVariant(type)[status][field];
    }
  };

  return {
    fill: color('default', 'fill'),
    stroke: color('default', 'stroke'),
    textFill: color('default', 'textFill'),
    hoverFill: color('hover', 'fill'),
    hoverStroke: color('hover', 'stroke'),
    hoverTextFill: color('hover', 'textFill'),
    pressFill: color('press', 'fill'),
    pressStroke: color('press', 'stroke'),
    pressTextFill: color('press', 'textFill'),
    disabledFill: color('disabled', 'fill'),
    disabledStroke: color('disabled', 'stroke'),
    disabledTextFill: color('disabled', 'textFill'),
  };
};

export class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  public get __tag() {
    return 'ElButton';
  }

  render() {
    const {
      text,
      size = '',
      link,
      round,
      circle,
      disabled,
      onClick = NOOP,
    } = this.props;

    const {
      fill,
      stroke,
      hoverFill,
      hoverStroke,
      pressFill,
      pressStroke,
      disabledFill,
      disabledStroke,
      textFill,
      hoverTextFill,
      pressTextFill,
      disabledTextFill,
    } = getColor(this.props);

    this.set({
      height: link ? undefined : ComponentSize[size],
      fill,
      stroke: isSameColor(stroke, fill) ? undefined : stroke,
      strokeWidth: 1,
      strokeAlign: 'inside',
      cornerRadius: round ? BorderRadius.round : circle ? BorderRadius.circle : BorderRadius[size],
      cursor: 'pointer',
      disabled,
      hoverStyle: {
        fill: hoverFill,
        stroke: isSameColor(hoverStroke, hoverFill) ? undefined : hoverStroke,
      },
      pressStyle: {
        fill: pressFill,
        stroke: isSameColor(pressStroke, pressFill) ? undefined : pressStroke,
      },
      disabledStyle: {
        fill: disabledFill,
        stroke: isSameColor(disabledStroke, disabledFill) ? undefined : disabledStroke,
        cursor: 'not-allowed',
      },
      children: [
        {
          tag: 'Text',
          width: circle ? ComponentSize[size] : undefined,
          textAlign: circle ? 'center' : undefined,
          text,
          fill: textFill,
          fontSize: FontSize[size],
          fontWeight: 500,
          lineHeight: FontSize[size],
          padding: link ? undefined : TextPadding[size],
          hitBox: true,
          disabled,
          hoverStyle: {
            fill: hoverTextFill,
          },
          pressStyle: {
            fill: pressTextFill,
          },
          disabledStyle: {
            fill: disabledTextFill,
          },
        },
      ],
    });

    this.on(PointerEvent.CLICK, onClick);
  }
}
