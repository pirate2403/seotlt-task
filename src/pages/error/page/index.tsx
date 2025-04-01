import { Button, Typography, TYPOGRAPHY_SIZE, TYPOGRAPHY_WEIGHT } from '@/shared/ui';
import { JSX } from 'react';
import { NavLink } from 'react-router';
import styles from './styles.module.scss';

export function ErrorPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <Typography size={TYPOGRAPHY_SIZE.LG} weight={TYPOGRAPHY_WEIGHT.BOLD}>
        Возникла непредвиденная ошибка
      </Typography>
      <NavLink to={'/'}>
        <Button>Перейти на главную</Button>
      </NavLink>
    </div>
  );
}
