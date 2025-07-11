import type { Input } from './input';

export type InputProps = {
  type?: string
  size?: 'large' | 'default' | 'small' | ''
}

export type InputInstance = InstanceType<typeof Input>
