import { createEffect } from 'effector';
import { NavigateFunction } from 'react-router';

interface NavigateToPostsPayload {
  nav: NavigateFunction;
  id: string;
}

export const commonNavigateToPostsFx = createEffect((props: NavigateToPostsPayload) => props.nav('/post/' + props.id));
export const commonDelayedFx = createEffect(async () => await new Promise((resolve) => setTimeout(resolve, 1000)));
