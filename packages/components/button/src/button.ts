import { PointerEvent } from 'leafer-ui';
import '@leafer-in/state';
import { borderColorMap, colorMap, textColorMap, sizeMap, borderRadiusMap } from '@element-plus-leafer/constants';
import { Component, darken, NOOP, lighten, isSameColor, defineMap } from '@element-plus-leafer/utils';
import type { ButtonProps } from './types';

export const fillMap = defineMap({
  ...colorMap,
  '': colorMap['white'],
}, '');

export const strokeMap = defineMap({
  ...colorMap,
  '': borderColorMap[''],
}, '');

export const cornerRadiusMap = defineMap({
  'large': borderRadiusMap['base'],
  'default': borderRadiusMap['base'],
  'small': borderRadiusMap['small'],
});

export const textFontSizeMap = defineMap({
  'large': 14,
  'default': 14,
  'small': 12,
});

export const textPaddingMap = defineMap({
  'large': [13, 20],
  'default': [9, 16],
  'small': [6, 12],
});

export class Button extends Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  public get __tag() {
    return 'ElButton';
  }

  render() {
    const text = this.props.text || '';
    const size = this.props.size || '';
    const type = this.props.type || '';
    const plain = this.props.plain;
    const round = this.props.round;
    const circle = this.props.circle;
    const disabled = this.props.disabled;
    // events
    const onClick = this.props.onClick || NOOP;

    const fill = plain ? lighten(fillMap[type], 90) : fillMap[type];
    const stroke = type ? (plain ? lighten(colorMap[type], 50) : colorMap[type]) : borderColorMap[''];
    const hoverFill = type ? (plain ? fillMap[type] : lighten(fillMap[type], 30)) : (plain ? colorMap['white'] : lighten(fillMap['primary'], 90));
    const hoverStroke = type ? (plain ? fillMap[type] : lighten(fillMap[type], 30)) : (plain ? fillMap['primary'] : lighten(fillMap['primary'], 70));
    const pressFill = type ? darken(fillMap[type]) : (plain ? colorMap['white'] : lighten(fillMap['primary'], 90));
    const pressStroke = type ? darken(fillMap[type]) : fillMap['primary'];
    const disabledFill = plain ? lighten(fillMap[type], 90) : lighten(fillMap[type], 50);
    const disabledStroke = type ? (plain ? lighten(strokeMap[type], 80) : lighten(strokeMap[type], 50)) : borderColorMap['light'];
    const textFill = type ? (plain ? fillMap[type] : colorMap['white']) : textColorMap['regular'];
    const textHoverFill = type ? colorMap['white'] : fillMap['primary'];
    const textDisabledFill = type ? (plain ? lighten(fillMap[type], 50) : colorMap['white']) : textColorMap['placeholder'];

    this.set({
      height: sizeMap[size],
      fill,
      stroke: isSameColor(stroke, fill) ? undefined : stroke,
      strokeWidth: 1,
      strokeAlign: 'inside',
      cornerRadius: round ? borderRadiusMap['round'] : circle ? borderRadiusMap['circle'] : cornerRadiusMap[size],
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
          width: circle ? sizeMap[size] : undefined,
          textAlign: circle ? 'center' : undefined,
          text,
          fill: textFill,
          fontSize: textFontSizeMap[size],
          fontWeight: 500,
          lineHeight: textFontSizeMap[size],
          padding: textPaddingMap[size],
          hitBox: true,
          disabled,
          hoverStyle: {
            fill: textHoverFill,
          },
          disabledStyle: {
            fill: textDisabledFill,
          },
        },
      ],
    });

    this.on(PointerEvent.CLICK, onClick);
  }
}
