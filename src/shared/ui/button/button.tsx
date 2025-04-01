import { ButtonHTMLAttributes, Fragment, JSX, ReactNode } from 'react';
import { Typography, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from '../typography';
import { BUTTON_KIND, BUTTON_SIZE, BUTTON_ICON_POSITION } from './constants';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: (typeof BUTTON_KIND)[keyof typeof BUTTON_KIND];
  size?: (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
  iconPosition?: (typeof BUTTON_ICON_POSITION)[keyof typeof BUTTON_ICON_POSITION];
  fullWidth?: boolean;
  icon?: ReactNode;
}

export function Button({
  className,
  children,
  icon,
  iconPosition = BUTTON_ICON_POSITION.PREV,
  kind = BUTTON_KIND.PRIMARY,
  size = BUTTON_SIZE.SM,
  fullWidth,
  ...props
}: Props): JSX.Element {
  const isIconOnly = kind === BUTTON_KIND.ICON;
  const isPrev = iconPosition === BUTTON_ICON_POSITION.PREV;

  return (
    <button
      className={cn(styles.root, styles[kind], styles[size], className, {
        [styles.fullWidth]: fullWidth,
      })}
      {...props}
    >
      <Typography size={size} className={styles.content} weight={TYPOGRAPHY_WEIGHT.BOLD} tag={TYPOGRAPHY_TAG.DIV}>
        {isPrev && icon}
        {!isIconOnly && children && <Fragment>&nbsp;&nbsp;&nbsp;{children}&nbsp;&nbsp;&nbsp;</Fragment>}
        {!isPrev && icon}
      </Typography>
    </button>
  );
}
