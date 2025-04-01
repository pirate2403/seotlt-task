import { createEffect, createEvent, createStore, sample, combine, attach } from 'effector';
import { createGate } from 'effector-react';
import { nanoid } from 'nanoid';
import { NavigateFunction } from 'react-router';
import { createEditPostApi } from '../api/create-edit-post-api';
import { FormValues } from './types';
import { Post } from '@/entities/post';
import { commonDelayedFx, commonNavigateToPostsFx } from './common';

interface CreatePostGatePayload {
  navigate: NavigateFunction;
}

const createPostFx = createEffect(createEditPostApi.createPost);
const navigateToPostsFx = attach({ effect: commonNavigateToPostsFx });
const delayedFx = attach({ effect: commonDelayedFx });
const temporaryPost = createStore<Post | null>(null);
export const CreatePostGate = createGate<CreatePostGatePayload>();
export const $isLoading = createPostFx.pending;
export const $isShowDone = delayedFx.pending;
export const onSubmitFormFx = createEvent<FormValues>();

sample({
  clock: onSubmitFormFx,
  fn: (values) => ({ ...values, date: new Date().toISOString(), id: nanoid() }),
  target: createPostFx,
});

sample({
  clock: createPostFx.doneData,
  target: [delayedFx, temporaryPost],
});

sample({
  clock: delayedFx.doneData,
  source: combine(temporaryPost, CreatePostGate.state, (p, { navigate }) => ({ id: p?.id ?? '', nav: navigate })),
  target: navigateToPostsFx,
});
