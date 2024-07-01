import type { Button } from './button';

export type ButtonProps = {
  text?: string
  size?: 'large' | 'default' | 'small' | ''
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
  plain?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
}

export type ButtonInstance = ReturnType<typeof Button>
