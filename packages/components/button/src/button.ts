import { Box } from 'leafer-ui';
import '@leafer-in/state';
import { borderColorMap, colorMap, textColorMap, sizeMap, borderRadiusMap, presetFont } from '@element-plus-leafer/constants';
import { darken, lighten } from '@element-plus-leafer/utils';
import type { ButtonProps } from './types';

export const heightMap = {
  'large': sizeMap['large'],
  'default': sizeMap['default'],
  'small': sizeMap['small'],
};

export const fillMap = {
  '': colorMap['white'],
  'primary': colorMap['primary'],
  'success': colorMap['success'],
  'warning': colorMap['warning'],
  'danger': colorMap['danger'],
  'info': colorMap['info'],
};

export const strokeMap = {
  '': borderColorMap[''],
  'primary': colorMap['primary'],
  'success': colorMap['success'],
  'warning': colorMap['warning'],
  'danger': colorMap['danger'],
  'info': colorMap['info'],
};

export const cornerRadiusMap = {
  'large': borderRadiusMap['base'],
  'default': borderRadiusMap['base'],
  'small': borderRadiusMap['small'],
};

export const textFontSizeMap = {
  'large': 14,
  'default': 14,
  'small': 12,
};

export const textPaddingMap = {
  'large': [13, 20],
  'default': [9, 16],
  'small': [6, 12],
};

export const Button = (props: ButtonProps = {}) => {
  const text = props.text || '';
  const size = props.size || 'default';
  const type = props.type || '';
  const plain = props.plain || false;
  const round = props.round || false;
  const circle = props.circle || false;
  const disabled = props.disabled || false;

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

  return new Box({
    height: heightMap[size],
    fill,
    stroke,
    strokeWidth: 1,
    strokeAlign: 'inside',
    cornerRadius: round ? borderRadiusMap['round'] : circle ? borderRadiusMap['circle'] : cornerRadiusMap[size],
    cursor: 'pointer',
    disabled,
    hoverStyle: {
      fill: hoverFill,
      stroke: hoverStroke,
    },
    pressStyle: {
      fill: pressFill,
      stroke: pressStroke,
    },
    disabledStyle: {
      fill: disabledFill,
      stroke: disabledStroke,
      cursor: 'not-allowed',
    },
    children: [
      {
        tag: 'Text',
        width: circle ? heightMap[size] : undefined,
        textAlign: circle ? 'center' : undefined,
        text,
        fill: textFill,
        fontSize: textFontSizeMap[size],
        fontWeight: 500,
        fontFamily: presetFont,
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
};
