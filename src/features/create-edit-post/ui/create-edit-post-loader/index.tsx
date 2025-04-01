import { Loader } from '@/shared/ui';
import { Fragment, JSX } from 'react';

interface Props {
  isLoading?: boolean;
  isShowDone?: boolean;
}

export function CreateEditPostLoader({ isLoading, isShowDone }: Props): JSX.Element {
  if (!isLoading && !isShowDone) return <Fragment />;
  return <Loader isDone={!!isShowDone} />;
}
