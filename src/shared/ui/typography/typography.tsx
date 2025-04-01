import cn from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import { TYPOGRAPHY_KIND, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from './constants';
import styles from './styles.module.scss';

interface Props extends PropsWithChildren {
  className?: string;
  tag?: (typeof TYPOGRAPHY_TAG)[keyof typeof TYPOGRAPHY_TAG];
  kind?: (typeof TYPOGRAPHY_KIND)[keyof typeof TYPOGRAPHY_KIND];
  size?: (typeof TYPOGRAPHY_SIZE)[keyof typeof TYPOGRAPHY_SIZE];
  weight?: (typeof TYPOGRAPHY_WEIGHT)[keyof typeof TYPOGRAPHY_WEIGHT];
}

export function Typography({
  children,
  className,
  tag = TYPOGRAPHY_TAG.SPAN,
  kind = TYPOGRAPHY_KIND.PRIMARY,
  size = TYPOGRAPHY_SIZE.MD,
  weight = TYPOGRAPHY_WEIGHT.REGULAR,
}: Props): JSX.Element {
  const Element = tag;

  return (
    <Element className={cn(styles.root, styles[kind], styles[size], styles[weight], className)}>{children}</Element>
  );
}
