import { Typography, TYPOGRAPHY_SIZE } from '@/shared/ui';
import styles from './styles.module.scss';

export function PostViewError() {
  return (
    <div className={styles.root}>
      <Typography size={TYPOGRAPHY_SIZE.XL}>Возникла ошибка при загрузке поста</Typography>
    </div>
  );
}
