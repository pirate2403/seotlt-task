import { Button, BUTTON_KIND, BUTTON_SIZE, Typography, TYPOGRAPHY_SIZE, TYPOGRAPHY_WEIGHT } from '@/shared/ui';
import { JSX } from 'react';
import { NavLink } from 'react-router';
import styles from './styles.module.scss';

export function HeaderLogo(): JSX.Element {
  return (
    <div className={styles.root}>
      <NavLink to="/">
        <Button size={BUTTON_SIZE.SM} kind={BUTTON_KIND.TEXT}>
          <Typography size={TYPOGRAPHY_SIZE.XL} weight={TYPOGRAPHY_WEIGHT.BOLD}>
            SEOTLT
          </Typography>
        </Button>
      </NavLink>
    </div>
  );
}
