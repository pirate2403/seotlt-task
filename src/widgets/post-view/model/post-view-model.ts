import { fetchPostFx, Post } from '@/entities/post';
import { attach, createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { NavigateFunction } from 'react-router';

interface PostViewGatePayload {
  id?: string;
  nav?: NavigateFunction;
}

const fetchPostViewFx = attach({ effect: fetchPostFx });
const removeDelayFx = createEffect(async () => await new Promise((resolve) => setTimeout(resolve, 800)));
const navigateToPostsFx = createEffect((nav?: NavigateFunction) => nav?.('/'));

export const PostViewGate = createGate<PostViewGatePayload>();
export const $post = createStore<Post | null>(null);
export const $isLoading = fetchPostFx.pending;
export const $error = createStore<string | null>(null);
export const $isRemoving = removeDelayFx.pending;
export const removePostCb = createEvent();

sample({
  clock: PostViewGate.open,
  source: PostViewGate.state,
  filter: ({ id }) => !!id,
  fn: ({ id }) => id || '',
  target: fetchPostViewFx,
});

sample({
  clock: fetchPostViewFx.pending,
  fn: () => null,
  target: [$post, $error],
});

sample({
  clock: fetchPostViewFx.failData,
  fn: (error) => error.message,
  target: $error,
});

sample({
  clock: fetchPostViewFx.doneData,
  target: $post,
});

sample({
  clock: removePostCb,
  target: removeDelayFx,
});

sample({
  clock: removeDelayFx.doneData,
  source: PostViewGate.state,
  fn: ({ nav }) => nav,
  target: navigateToPostsFx,
});
