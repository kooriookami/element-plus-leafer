import { TinyColor } from '@ctrl/tinycolor';
import { Color } from '@element-plus-leafer/constants';
import type { ColorInput } from '@ctrl/tinycolor';

export function isDark() {
  return document.documentElement.classList.contains('dark');
}

export function darken(color: ColorInput, amount: number = 20) {
  return new TinyColor(color).mix(Color.black, amount).toString();
}

export function lighten(color: ColorInput, amount: number = 20) {
  return new TinyColor(color).mix(Color.white, amount).toString();
}

export function isSameColor(color1: ColorInput, color2: ColorInput) {
  return new TinyColor(color1).toString('rgb') === new TinyColor(color2).toString('rgb');
}
