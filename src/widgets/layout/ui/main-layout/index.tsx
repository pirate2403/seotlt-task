import { GreenBorderRoundIcon, GreenRoundIcon, GreenRoundSmallIcon } from '@/shared/assets';
import cn from 'classnames';
import { Fragment, JSX, ReactNode } from 'react';
import { Outlet } from 'react-router';
import styles from './styles.module.scss';

interface Props {
  header?: ReactNode;
}

export function MainLayout({ header }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <Fragment>
        <GreenRoundIcon className={cn(styles.icon, styles.icon_green)} />
        <GreenBorderRoundIcon className={cn(styles.icon, styles.icon_bordered)} />
        <GreenRoundSmallIcon className={cn(styles.icon, styles.icon_small)} />
      </Fragment>
      {header}
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
}
