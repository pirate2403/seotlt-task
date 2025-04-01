import { createEffect } from 'effector';
import { postApi } from '../api/post-api';

export const fetchPostFx = createEffect(postApi.getPostById);
