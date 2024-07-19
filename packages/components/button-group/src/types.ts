import type { ButtonInstance, ButtonGroup } from '@element-plus-leafer/components';

export type ButtonGroupProps = {
  size?: 'large' | 'default' | 'small' | ''
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | ''
  children?: ButtonInstance[]
}

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
