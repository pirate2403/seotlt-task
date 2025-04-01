import { GoBackButton } from '@/features/go-back';
import { PostView } from '@/widgets/post-view';
import { JSX } from 'react';
import styles from './style.module.scss';

export function PostPage(): JSX.Element {
  return (
    <div className={styles.root}>
      <GoBackButton to="/" />
      <PostView />
    </div>
  );
}
