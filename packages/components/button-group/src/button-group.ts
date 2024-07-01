import { Flow } from '@leafer-in/flow';
import { ButtonGroupProps } from './types.ts';

function getCornerRadius(cornerRadius: any) {
  if (Array.isArray(cornerRadius)) {
    return cornerRadius[0];
  }
  return cornerRadius;
}

export const ButtonGroup = (props: ButtonGroupProps = {}) => {
  const children = props.children || [];

  if (children.length > 1) {
    children.forEach((child, index) => {
      if (index === 0) {
        const cornerRadius = getCornerRadius(child.cornerRadius);
        child.cornerRadius = [cornerRadius, 0, 0, cornerRadius];
      } else if (index === children.length - 1) {
        const cornerRadius = getCornerRadius(child.cornerRadius);
        child.cornerRadius = [0, cornerRadius, cornerRadius, 0];
      } else {
        child.cornerRadius = 0;
      }
    });
  }

  return new Flow({
    gap: 1,
    children,
  });
};
