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

export const buttonVariant = (type: string) => {
  return {
    '': {
      fill: fillMap[type],
      stroke: colorMap[type],
      textFill: colorMap['white'],
    },
    hover: {
      fill: lighten(fillMap[type], 30),
      stroke: lighten(fillMap[type], 30),
      textFill: colorMap['white'],
    },
    press: {
      fill: darken(fillMap[type], 20),
      stroke: darken(fillMap[type], 20),
      textFill: colorMap['white'],
    },
    disabled: {
      fill: lighten(fillMap[type], 50),
      stroke: lighten(fillMap[type], 50),
      textFill: colorMap['white'],
    },
  };
};

export const buttonPlain = (type: string) => {
  return {
    '': {
      fill: lighten(fillMap[type], 90),
      stroke: lighten(fillMap[type], 50),
      textFill: fillMap[type],
    },
    hover: {
      fill: fillMap[type],
      stroke: fillMap[type],
      textFill: colorMap['white'],
    },
    press: {
      textFill: colorMap['white'],
    },
    disabled: {},
  };
};

export const buttonLink = (type: string) => {
  return {
    '': {
      fill: lighten(fillMap[type], 90),
      stroke: lighten(fillMap[type], 50),
      textFill: fillMap[type],
    },
    hover: {
      fill: fillMap[type],
      stroke: fillMap[type],
      textFill: lighten(fillMap[type], 50),
    },
    press: {
      textFill: colorMap['white'],
    },
    disabled: {},
  };
};

export const getColor = (props: ButtonProps, status: string, field: string) => {
  const type = props.type || '';
  const plain = props.plain;
  const link = props.link;

  if (plain) {
    return buttonPlain(type)?.[status]?.[field];
  } else if (link) {
    return buttonLink(type)[status][field];
  } else {
    return buttonVariant(type)[status][field];
  }
};

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

    let fill = plain ? lighten(fillMap[type], 90) : fillMap[type];
    let stroke = type ? (plain ? lighten(colorMap[type], 50) : colorMap[type]) : borderColorMap[''];
    let hoverFill = type ? (plain ? fillMap[type] : lighten(fillMap[type], 30)) : (plain ? colorMap['white'] : lighten(fillMap['primary'], 90));
    let hoverStroke = type ? (plain ? fillMap[type] : lighten(fillMap[type], 30)) : (plain ? fillMap['primary'] : lighten(fillMap['primary'], 70));
    let pressFill = type ? darken(fillMap[type]) : (plain ? colorMap['white'] : lighten(fillMap['primary'], 90));
    let pressStroke = type ? darken(fillMap[type]) : fillMap['primary'];
    let disabledFill = plain ? lighten(fillMap[type], 90) : lighten(fillMap[type], 50);
    let disabledStroke = type ? (plain ? lighten(strokeMap[type], 80) : lighten(strokeMap[type], 50)) : borderColorMap['light'];
    let textFill = type ? (plain ? fillMap[type] : colorMap['white']) : textColorMap['regular'];
    let textHoverFill = type ? colorMap['white'] : fillMap['primary'];
    let textDisabledFill = type ? (plain ? lighten(fillMap[type], 50) : colorMap['white']) : textColorMap['placeholder'];

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
