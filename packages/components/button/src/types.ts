import type { Button } from './button';
import type { IUIInputData } from '@leafer-ui/interface';

export type ButtonProps = {
  text?: string
  size?: 'large' | 'default' | 'small' | ''
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
  plain?: boolean
  link?: boolean
  round?: boolean
  circle?: boolean
  loading?: boolean
  loadingIcon?: string
  icon?: string
  iconRight?: string
  disabled?: boolean
  color?: string
  children?: IUIInputData[];
  onClick?: (...args: any) => any
}

export type ButtonInstance = InstanceType<typeof Button>
