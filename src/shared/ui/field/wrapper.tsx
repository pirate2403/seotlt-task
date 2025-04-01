import cn from 'classnames';
import { JSX, PropsWithChildren } from 'react';
import { Typography, TYPOGRAPHY_KIND, TYPOGRAPHY_SIZE, TYPOGRAPHY_TAG } from '../typography';
import styles from './styles.module.scss';

interface Props extends PropsWithChildren {
  id: string;
  label?: string;
  errorMessage?: string;
  withValidIndicator?: boolean;
  withoutMessage?: boolean;
  disabled?: boolean;
}

export function FieldWrapper(props: Props): JSX.Element {
  const { id, label, errorMessage, withValidIndicator, disabled, withoutMessage, children } = props;

  const showMessage = !!errorMessage && !withoutMessage;

  return (
    <label
      htmlFor={id}
      className={cn(styles.root, {
        [styles.error]: errorMessage,
        [styles.disabled]: disabled,
        [styles.withIndicator]: withValidIndicator,
        [styles.withoutMessage]: withoutMessage,
      })}
    >
      {label && (
        <Typography size={TYPOGRAPHY_SIZE.LG} kind={TYPOGRAPHY_KIND.SECONDARY} className={styles.label}>
          {label}
        </Typography>
      )}
      <Typography tag={TYPOGRAPHY_TAG.DIV}>{children}</Typography>
      {showMessage && (
        <Typography className={styles.message} size={TYPOGRAPHY_SIZE.XS}>
          {errorMessage}
        </Typography>
      )}
    </label>
  );
}
