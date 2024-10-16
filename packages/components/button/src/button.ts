import { PointerEvent } from 'leafer-ui';
import { Icon } from '@element-plus-leafer/components';
import { BorderColor, Color, TextColor, ComponentSize, BorderRadius, FontSize, FillColor } from '@element-plus-leafer/constants';
import { Component, darken, NOOP, lighten, isSameColor, defineMap } from '@element-plus-leafer/utils';
import Loading from '@element-plus/icons-svg/loading.svg?raw';
import type { ButtonProps } from './types';
import type { IFlowInputData } from '@leafer-ui/interface';

export const Padding = defineMap({
  large: [13, 20],
  default: [9, 16],
  small: [6, 12],
});

export const Gap = defineMap({
  large: 8,
  default: 6,
  small: 4,
});

export const buttonVariant = (color: string) => defineMap({
  default: {
    fill: color ? color : FillColor.blank,
    stroke: color ? color : BorderColor.base,
    textFill: color ? Color.white : TextColor.regular,
  },
  hover: {
    fill: color ? lighten(color, 30) : lighten(Color.primary, 90),
    stroke: color ? lighten(color, 30) : lighten(Color.primary, 70),
    textFill: color ? Color.white : Color.primary,
  },
  press: {
    fill: color ? darken(color, 20) : lighten(Color.primary, 90),
    stroke: color ? darken(color, 20) : Color.primary,
    textFill: color ? Color.white : Color.primary,
  },
  disabled: {
    fill: color ? lighten(color, 50) : FillColor.blank,
    stroke: color ? lighten(color, 50) : BorderColor.light,
    textFill: color ? Color.white : TextColor.placeholder,
  },
});

export const buttonPlain = (color: string) => defineMap({
  default: {
    fill: color ? lighten(color, 90) : FillColor.blank,
    stroke: color ? lighten(color, 50) : BorderColor.base,
    textFill: color ? color : TextColor.regular,
  },
  hover: {
    fill: color ? color : FillColor.blank,
    stroke: color ? color : Color.primary,
    textFill: color ? Color.white : Color.primary,
  },
  press: {
    fill: color ? darken(color, 20) : FillColor.blank,
    stroke: color ? darken(color, 20) : Color.primary,
    textFill: color ? Color.white : Color.primary,
  },
  disabled: {
    fill: color ? lighten(color, 90) : FillColor.blank,
    stroke: color ? lighten(color, 80) : BorderColor.light,
    textFill: color ? lighten(color, 50) : TextColor.placeholder,
  },
});

export const buttonLink = (color: string) => defineMap({
  default: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: color ? color : TextColor.regular,
  },
  hover: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: color ? lighten(color, 50) : TextColor.secondary,
  },
  press: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: color ? darken(color, 20) : TextColor.primary,
  },
  disabled: {
    fill: 'transparent',
    stroke: 'transparent',
    textFill: color ? lighten(color, 50) : TextColor.placeholder,
  },
});

export const getColor = (props: ButtonProps) => {
  const { type, plain, link, color, loading } = props;

  const _color = color ? color : type ? Color[type] : '';

  const get = (status: 'default' | 'hover' | 'press' | 'disabled', field: 'fill' | 'stroke' | 'textFill') => {
    if (plain) {
      return buttonPlain(_color)[status][field];
    } else if (link) {
      return buttonLink(_color)[status][field];
    } else {
      return buttonVariant(_color)[status][field];
    }
  };

  const fill = get('default', 'fill');
  const stroke = get('default', 'stroke');
  const textFill = get('default', 'textFill');
  const hoverFill = get('hover', 'fill');
  const hoverStroke = get('hover', 'stroke');
  const hoverTextFill = get('hover', 'textFill');
  const pressFill = get('press', 'fill');
  const pressStroke = get('press', 'stroke');
  const pressTextFill = get('press', 'textFill');
  const disabledFill = loading ? lighten(fill, 30) : get('disabled', 'fill');
  const disabledStroke = loading ? lighten(stroke, 30) : get('disabled', 'stroke');
  const disabledTextFill = loading ? lighten(textFill, 30) : get('disabled', 'textFill');

  return {
    fill,
    stroke,
    textFill,
    hoverFill,
    hoverStroke,
    hoverTextFill,
    pressFill,
    pressStroke,
    pressTextFill,
    disabledFill,
    disabledStroke,
    disabledTextFill,
  };
};

export class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps, data?: IFlowInputData) {
    super(props, data);
  }

  public get __tag() {
    return 'ElButton';
  }

  render() {
    const {
      text = '',
      size = '',
      link,
      round,
      circle,
      loading,
      loadingIcon,
      icon,
      disabled,
      children = [],
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
      width: circle ? ComponentSize[size] : undefined,
      fill,
      padding: link ? undefined : Padding[size],
      stroke: isSameColor(stroke, fill) ? undefined : stroke,
      strokeWidth: 1,
      cornerRadius: round ? BorderRadius.round : circle ? BorderRadius.circle : BorderRadius[size],
      origin: 'center',
      cursor: 'pointer',
      disabled: disabled || loading,
      flowAlign: 'center',
      gap: Gap[size],
      button: true,
      transition: {
        duration: 0.1,
      },
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
        cursor: disabled ? 'not-allowed' : undefined,
      },
      children: [
        new Icon({
          icon: loading ? (loadingIcon || Loading) : icon,
          color: textFill,
          size: FontSize[size],
          loading,
        }),
        {
          tag: 'Text',
          textAlign: circle ? 'center' : undefined,
          text,
          fill: textFill,
          fontSize: FontSize[size],
          fontWeight: 500,
          lineHeight: FontSize[size],
          disabled,
          visible: !!text || 0,
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
        ...children,
      ],
    });

    if (loading || disabled) {
      this.off(PointerEvent.CLICK);
    } else {
      this.on(PointerEvent.CLICK, onClick);
    }
  }
}
