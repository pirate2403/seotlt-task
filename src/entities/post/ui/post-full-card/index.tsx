import { DateFormatter } from '@/shared/lib';
import { Typography, TYPOGRAPHY_KIND, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG, TYPOGRAPHY_WEIGHT } from '@/shared/ui';
import { JSX } from 'react';
import { Post } from '../../model/types';
import styles from './styles.module.scss';

interface Props {
  post: Post;
}

export function PostFullCard({ post }: Props): JSX.Element {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <Typography
          className={styles.title}
          kind={TYPOGRAPHY_KIND.SECONDARY}
          size={TYPOGRAPHY_SIZE.LG}
          tag={TYPOGRAPHY_TAG.H3}
        >
          {post.title}
        </Typography>
        <Typography className={styles.date} size={TYPOGRAPHY_SIZE.SM} weight={TYPOGRAPHY_WEIGHT.MEDIUM}>
          {DateFormatter.formatToRu(post.date)}
        </Typography>
      </div>

      <Typography>{post.text}</Typography>
    </div>
  );
}
