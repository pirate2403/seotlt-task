import { Button, BUTTON_KIND, BUTTON_SIZE, Typography, TYPOGRAPHY_SIZE, TYPOGRAPHY_WEIGHT } from '@/shared/ui';
import { JSX, ReactNode } from 'react';
import { NavLink } from 'react-router';
import cn from 'classnames';
import styles from './styles.module.scss';

interface Props {
  secondary?: boolean;
  children?: ReactNode;
  to: string;
  small?: boolean;
}

export function GoToButton({ secondary, children, to, small }: Props): JSX.Element {
  const kind = secondary ? BUTTON_KIND.SECONDARY : BUTTON_KIND.TEXT;
  const size = small ? TYPOGRAPHY_SIZE.SM : TYPOGRAPHY_SIZE.XL;

  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Button size={BUTTON_SIZE.SM} kind={kind}>
          <Typography
            size={size}
            weight={TYPOGRAPHY_WEIGHT.BOLD}
            className={cn({ [styles.active]: isActive && !secondary })}
          >
            {children}
          </Typography>
        </Button>
      )}
    </NavLink>
  );
}
