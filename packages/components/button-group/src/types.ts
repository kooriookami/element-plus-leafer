import type { ButtonInstance, ButtonGroup } from '@element-plus-leafer/components';

export type ButtonGroupProps = {
  children?: Array<ButtonInstance>
  size?: 'large' | 'default' | 'small' | ''
}

export type ButtonGroupInstance = InstanceType<typeof ButtonGroup>
