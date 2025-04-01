import { fetchPostFx, Post } from '@/entities/post';
import { attach, combine, createEffect, createEvent, createStore, sample } from 'effector';
import { createGate } from 'effector-react';
import { NavigateFunction } from 'react-router';
import { createEditPostApi } from '../api/create-edit-post-api';
import { commonDelayedFx, commonNavigateToPostsFx } from './common';
import { FormValues } from './types';

interface EditPostGatePayload {
  id?: string;
  navigate: NavigateFunction;
}

const editPostFx = createEffect(createEditPostApi.updatePost);
const currentPostFx = attach({ effect: fetchPostFx });
const navigateToPostsFx = attach({ effect: commonNavigateToPostsFx });
const delayedFx = attach({ effect: commonDelayedFx });
export const EditPostGate = createGate<EditPostGatePayload>();
export const $currentPost = createStore<Post | null>(null);
export const $isLoading = combine(
  editPostFx.pending,
  currentPostFx.pending,
  (editPending, currentPending) => editPending || currentPending,
);
export const $isShowDone = delayedFx.pending;
export const onSubmitFormFx = createEvent<FormValues>();

sample({
  clock: EditPostGate.open,
  filter: ({ id }) => !!id,
  fn: ({ id }) => id ?? '',
  target: currentPostFx,
});

sample({
  clock: currentPostFx.doneData,
  target: $currentPost,
});

sample({
  clock: onSubmitFormFx,
  source: EditPostGate.state,
  filter: ({ id }) => !!id,
  fn: ({ id }, values) => ({ ...values, date: new Date().toISOString(), id: id ?? '' }),
  target: editPostFx,
});

sample({
  clock: editPostFx.doneData,
  target: [delayedFx, $currentPost],
});

sample({
  clock: delayedFx.doneData,
  source: combine($currentPost, EditPostGate.state, (p, { navigate }) => ({ id: p?.id ?? '', nav: navigate })),
  target: navigateToPostsFx,
});
