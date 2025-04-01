import { combine, createEffect, createEvent, createStore, sample } from 'effector';
import { removePostApi } from '../api/remove-post-api';

interface HandleRemovePayload {
  id: string;
  cb?: () => void;
}

const removePostCallbackFx = createEffect((cb?: () => void) => cb?.());
const removePostFx = createEffect(removePostApi.removePost);

export const handleRemove = createEvent<HandleRemovePayload>();

const $deletingPostId = createStore<string | null>(null)
  .on(handleRemove, (_, { id }) => id)
  .reset(removePostFx.finally);

export const $isLoading = (postId: string) =>
  combine(removePostFx.pending, $deletingPostId, (pending, id) => pending && id === postId);

sample({
  clock: handleRemove,
  fn: ({ id }) => id,
  target: removePostFx,
});

sample({
  clock: removePostFx.doneData,
  source: handleRemove.map(({ cb }) => cb),
  target: removePostCallbackFx,
});
