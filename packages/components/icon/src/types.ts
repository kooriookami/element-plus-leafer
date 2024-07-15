import type { Icon } from './icon';

export type IconProps = {
  icon?: string
  color?: string
  size?: number
}

export type IconInstance = InstanceType<typeof Icon>
