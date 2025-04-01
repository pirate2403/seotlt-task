import cn from 'classnames';
import { ForwardedRef, forwardRef, InputHTMLAttributes, JSX, useId } from 'react';
import { FieldWrapper } from './wrapper';
import styles from './styles.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  withValidIndicator?: boolean;
  withoutMessage?: boolean;
}

function UiInput(props: Props, ref: ForwardedRef<HTMLInputElement>): JSX.Element {
  const {
    id,
    label,
    className,
    errorMessage,
    withValidIndicator,
    placeholder = ' ',
    disabled,
    withoutMessage,
    ...rest
  } = props;

  const inputId = useId();
  const fieldId = id || inputId;

  return (
    <FieldWrapper
      id={fieldId}
      label={label}
      errorMessage={errorMessage}
      disabled={disabled}
      withValidIndicator={withValidIndicator}
      withoutMessage={withoutMessage}
    >
      <div className={cn(styles.field, className)}>
        <input ref={ref} id={fieldId} placeholder={placeholder} disabled={disabled} {...rest} />
      </div>
    </FieldWrapper>
  );
}

export const Input = forwardRef(UiInput);
