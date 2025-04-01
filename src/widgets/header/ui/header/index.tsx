import { JSX, ReactNode } from 'react';
import { HeaderLinks } from '../header-links';
import { HeaderLogo } from '../header-logo';
import styles from './styles.module.scss';

interface Props {
  userInfo?: ReactNode;
}

export function Header({ userInfo }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <HeaderLogo />
        <div className={styles.links}>
          <HeaderLinks />
        </div>
        {userInfo}
      </header>
    </div>
  );
}
