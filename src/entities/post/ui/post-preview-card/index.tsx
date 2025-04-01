import { DateFormatter } from '@/shared/lib';
import { Typography, TYPOGRAPHY_KIND, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from '@/shared/ui';
import { JSX, ReactNode } from 'react';
import { Post } from '../../model/types';
import styles from './styles.module.scss';

interface Props {
  post: Post;
  goToPost?: ReactNode;
  removePost?: ReactNode;
}

export function PostPreviewCard({ post, goToPost, removePost }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <Typography
        className={styles.title}
        kind={TYPOGRAPHY_KIND.SECONDARY}
        size={TYPOGRAPHY_SIZE.LG}
        tag={TYPOGRAPHY_TAG.H3}
      >
        {post.title}
      </Typography>

      <div className={styles.text}>
        <Typography>{post.text}</Typography>
      </div>

      <div className={styles.footer}>
        <Typography className={styles.date} size={TYPOGRAPHY_SIZE.SM} weight={TYPOGRAPHY_WEIGHT.MEDIUM}>
          {DateFormatter.formatToRu(post.date)}
        </Typography>
        <div className={styles.buttons}>
          {goToPost}
          {removePost}
        </div>
      </div>
    </div>
  );
}
