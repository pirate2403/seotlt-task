import { GoToButton } from '@/features/go-to';
import { Typography, TYPOGRAPHY_SIZE, TYPOGRAPHY_WEIGHT } from '@/shared/ui';
import { JSX } from 'react';
import styles from './styles.module.scss';

export function EmptyList(): JSX.Element {
  return (
    <div className={styles.root}>
      <Typography size={TYPOGRAPHY_SIZE.XL} weight={TYPOGRAPHY_WEIGHT.BOLD}>
        Список статей пуст
      </Typography>
      <GoToButton to="/new" secondary>
        Написать статью
      </GoToButton>
    </div>
  );
}
