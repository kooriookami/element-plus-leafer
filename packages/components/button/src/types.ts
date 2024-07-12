import type { Button } from './button';

export type ButtonProps = {
  text?: string
  size?: 'large' | 'default' | 'small' | ''
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
  plain?: boolean
  link?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
  onClick?: (...args: any) => any
}

export type ButtonInstance = InstanceType<typeof Button>
