import { Post } from '@/entities/post';
import { combine, createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { postListApi } from '../api/post-list-api';

const fetchPostsFx = createEffect(postListApi.getPosts);
const showErrorDelayFx = createEffect(async () => await new Promise((resolve) => setTimeout(resolve, 800)));

export const refreshPosts = createEvent();
export const PostsGate = createGate();
export const $posts = createStore<Post[]>([]);
export const $error = createStore(false);
export const $showLoader = combine(
  fetchPostsFx.pending,
  showErrorDelayFx.pending,
  (fetchPending, delayPending) => fetchPending || delayPending,
);

sample({
  clock: PostsGate.open,
  target: fetchPostsFx,
});

sample({
  clock: fetchPostsFx.pending,
  fn: () => false,
  target: $error,
});

sample({
  clock: fetchPostsFx.doneData,
  target: $posts,
});

sample({
  clock: fetchPostsFx.failData,
  fn: (error) => !!error,
  target: [$error, showErrorDelayFx],
});

sample({
  clock: refreshPosts,
  target: fetchPostsFx,
});
