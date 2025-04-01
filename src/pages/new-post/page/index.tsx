import { CreatePostForm } from '@/features/create-edit-post';
import { GoBackButton } from '@/features/go-back';
import { JSX } from 'react';
import styles from './styles.module.scss';

export function NewPostPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <GoBackButton to="/" />
      <CreatePostForm />
    </div>
  );
}
