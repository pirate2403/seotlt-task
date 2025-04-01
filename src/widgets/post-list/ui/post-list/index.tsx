import { PostPreviewCard } from '@/entities/post';
import { GoToButton } from '@/features/go-to';
import { Loader } from '@/shared/ui';
import { useGate, useList, useUnit } from 'effector-react';
import { Fragment, JSX } from 'react';
import { $error, $posts, $showLoader, PostsGate, refreshPosts } from '../../model/post-list-model';
import { EmptyList } from '../empty-list';
import styles from './styles.module.scss';
import { RemovePost } from '@/features/remove-post';

export function PostList(): JSX.Element {
  useGate(PostsGate);

  const [showLoader, posts, error] = useUnit([$showLoader, $posts, $error]);
  const isEmpty = !posts.length && !showLoader;

  return (
    <Fragment>
      {showLoader && <Loader isError={error} />}
      <div className={styles.root}>
        {useList($posts, (post) => (
          <PostPreviewCard
            post={post}
            goToPost={<GoToButton secondary small to={`/post/${post.id}`} children="Подробнее" />}
            removePost={<RemovePost id={post.id} cb={() => refreshPosts()} />}
          />
        ))}
      </div>
      {isEmpty && <EmptyList />}
    </Fragment>
  );
}
