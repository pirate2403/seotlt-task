import { Close } from '@/shared/assets';
import { Spinner, Typography, TYPOGRAPHY_SIZE } from '@/shared/ui';
import cn from 'classnames';
import { JSX } from 'react';
import { DEFAULT_TITLE } from './constants';
import styles from './styles.module.scss';

interface Props {
  isDone?: boolean;
  isError?: boolean;
}

export function Loader({ isDone, isError }: Props): JSX.Element {
  const showSpinner = !isDone && !isError;
  const title = showSpinner ? DEFAULT_TITLE.LOADING : isError ? DEFAULT_TITLE.ERROR : DEFAULT_TITLE.DONE;
  return (
    <div className={styles.root}>
      <div className={styles.loader}>
        {showSpinner ? <Spinner /> : <Close className={cn(styles.done, { [styles.error]: isError })} />}
        <Typography size={TYPOGRAPHY_SIZE.LG}>{title}</Typography>
      </div>
    </div>
  );
}
