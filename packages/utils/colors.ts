import { TinyColor } from '@ctrl/tinycolor';
import { colorMap } from '@element-plus-leafer/constants';
import type { ColorInput } from '@ctrl/tinycolor';

export function darken(color: ColorInput, amount: number = 20) {
  return new TinyColor(color).mix(colorMap.black, amount).toString();
}

export function lighten(color: ColorInput, amount: number = 20) {
  return new TinyColor(color).mix(colorMap.white, amount).toString();
}
