import type { Icon } from './icon';

export type IconProps = {
  icon?: string
  color?: string
  size?: number
  loading?: boolean
}

export type IconInstance = InstanceType<typeof Icon>
