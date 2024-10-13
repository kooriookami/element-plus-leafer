import { Component } from '@element-plus-leafer/utils';
import { BackgroundColor, BorderColor, BorderRadius, BoxShadow } from '@element-plus-leafer/constants';
import type { CardProps } from './types';
import type { IFlowInputData } from '@leafer-ui/interface';

export class Card extends Component<CardProps> {
  constructor(props: CardProps, data?: IFlowInputData) {
    super(props, data);
  }

  public get __tag() {
    return 'ElCard';
  }

  render() {
    const {
      header,
      footer,
      children = [],
      shadow = 'always',
    } = this.props;

    this.set({
      stroke: BorderColor.base,
      strokeWidth: 1,
      cornerRadius: BorderRadius.base,
      fill: BackgroundColor.overlay,
      shadow: shadow === 'always' ? BoxShadow.light : undefined,
      flow: 'y',
      transition: {
        duration: 0.3,
      },
      hoverStyle: {
        shadow: ['always', 'hover'].includes(shadow) ? BoxShadow.light : undefined,
      },
      children: [
        {
          tag: 'Flow',
          padding: 20,
          stroke: BorderColor.base,
          strokeWidth: 1,
          width: this.width,
          cornerRadius: [BorderRadius.base, BorderRadius.base, 0, 0],
          visible: !!header || 0,
          children: [
            typeof header === 'string' ? {
              tag: 'Text',
              text: header,
            } : header,
          ].filter(value => value),
        },
        {
          tag: 'Flow',
          padding: 20,
          children,
        },
        {
          tag: 'Flow',
          padding: 20,
          stroke: BorderColor.base,
          strokeWidth: 1,
          width: this.width,
          cornerRadius: [0, 0, BorderRadius.base, BorderRadius.base],
          visible: !!footer || 0,
          children: [
            typeof footer === 'string' ? {
              tag: 'Text',
              text: footer,
            } : footer,
          ].filter(value => value),
        },
      ],
    });
  }
}
