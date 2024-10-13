import type { Card } from './card';
import type { IUIInputData } from '@leafer-ui/interface';

export type CardProps = {
  header?: string | IUIInputData
  footer?: string | IUIInputData
  children?: IUIInputData[]
  shadow?: 'always' | 'never' | 'hover'
}

export type CardInstance = InstanceType<typeof Card>
