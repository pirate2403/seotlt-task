import { Post, PostFullCard } from '@/entities/post';
import { GoToButton } from '@/features/go-to/index.ts';
import { RemovePost } from '@/features/remove-post/index.ts';
import { Loader } from '@/shared/ui';
import { useGate, useUnit } from 'effector-react';
import { useNavigate, useParams } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import { $error, $isLoading, $isRemoving, $post, PostViewGate, removePostCb } from '../../model/post-view-model';
import { PostViewError } from '../post-view-error.ts';
import styles from './styles.module.scss';

export function PostView() {
  const { id } = useParams<Pick<Post, 'id'>>();
  const nav = useNavigate();
  useGate(PostViewGate, { id, nav });
  const [post, isLoading, error, isRemoving] = useUnit([$post, $isLoading, $error, $isRemoving]);
  const showLoader = isLoading || isRemoving;

  return (
    <div className={styles.root}>
      {showLoader && <Loader isDone={isRemoving} />}
      {error && <PostViewError />}
      {post && (
        <Fragment>
          <PostFullCard post={post} />
          <div className={styles.buttons}>
            <GoToButton to={'/edit/' + id} secondary small>
              Редактировать
            </GoToButton>
            <RemovePost id={post.id} cb={() => removePostCb()} />
          </div>
        </Fragment>
      )}
    </div>
  );
}
