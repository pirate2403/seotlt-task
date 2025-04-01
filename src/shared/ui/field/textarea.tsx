import cn from 'classnames';
import { ForwardedRef, forwardRef, JSX, TextareaHTMLAttributes, useId } from 'react';
import { FieldWrapper } from './wrapper';
import styles from './styles.module.scss';

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMessage?: string;
  withValidIndicator?: boolean;
  withoutMessage?: boolean;
}

function UiTextarea(props: Props, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element {
  const {
    id,
    label,
    className,
    errorMessage,
    withValidIndicator,
    placeholder = ' ',
    disabled,
    withoutMessage,
    rows = 10,
    ...rest
  } = props;

  const textareaId = useId();
  const fieldId = id || textareaId;

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
        <textarea ref={ref} id={fieldId} placeholder={placeholder} disabled={disabled} rows={rows} {...rest} />
      </div>
    </FieldWrapper>
  );
}

export const Textarea = forwardRef(UiTextarea);
