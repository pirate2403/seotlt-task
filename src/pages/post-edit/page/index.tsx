import { EditPostForm } from '@/features/create-edit-post';
import { GoBackButton } from '@/features/go-back';
import { JSX } from 'react';
import styles from './style.module.scss';

export function PostEditPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <GoBackButton to="/" />
      <EditPostForm />
    </div>
  );
}
