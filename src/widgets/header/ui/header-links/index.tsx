import { GoToButton } from '@/features/go-to';
import { JSX } from 'react';
import styles from './styles.module.scss';

export function HeaderLinks(): JSX.Element {
  return (
    <div className={styles.root}>
      <GoToButton to="/new">Написать статью</GoToButton>
    </div>
  );
}
