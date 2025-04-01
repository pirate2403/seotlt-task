import { Button, BUTTON_KIND, Input, Textarea } from '@/shared/ui';
import { useFormik } from 'formik';
import { Fragment, JSX, MouseEventHandler, useEffect } from 'react';
import { FORM_VALIDATION_SCHEMA } from '../../lib/form-validation-schema';
import { FormValues } from '../../model/types';
import styles from './styles.module.scss';
import { CreateEditPostLoader } from '../create-edit-post-loader';

const DEFAULT_BTN_TITLE = {
  SUBMIT: 'Опубликовать',
  CLEAR: 'Очистить',
} as const;

const INITIAL_VALUES = { title: '', text: '' } satisfies FormValues;

interface Props {
  initialValues?: FormValues;
  onSubmit: (values: FormValues) => void;
  onClear?: () => void;
  submitTitle?: string;
  clearTitle?: string;
  isLoading?: boolean;
  isShowDone?: boolean;
}

export function BaseForm({
  initialValues = INITIAL_VALUES,
  submitTitle,
  clearTitle,
  isLoading,
  isShowDone,
  onSubmit,
  onClear,
}: Props): JSX.Element {
  const { values, errors, touched, dirty, handleSubmit, handleChange, resetForm } = useFormik<FormValues>({
    validationSchema: FORM_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
    onSubmit,
  });

  useEffect(() => {
    if (touched.text || touched.title) return;
    resetForm({ values: initialValues });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialValues, touched]);

  const titleErrorMessage = (dirty && touched.text && errors.title) || '';
  const textErrorMessage = (dirty && touched.text && errors.text) || '';
  const isDisabled = !!isLoading || !dirty;

  const handleClear: MouseEventHandler<HTMLButtonElement> = () => {
    resetForm();
    onClear?.();
  };

  return (
    <Fragment>
      <CreateEditPostLoader isLoading={isLoading} isShowDone={isShowDone} />
      <form className={styles.root} onSubmit={handleSubmit}>
        <Input
          name="title"
          label="Заголовок"
          placeholder="Заголовок"
          value={values.title}
          errorMessage={titleErrorMessage}
          onChange={handleChange}
        />
        <Textarea
          name="text"
          label="Текст"
          placeholder="Текст"
          value={values.text}
          errorMessage={textErrorMessage}
          onChange={handleChange}
        />
        <div className={styles.buttons}>
          <Button type="submit" disabled={isDisabled}>
            {submitTitle ?? DEFAULT_BTN_TITLE.SUBMIT}
          </Button>
          <Button kind={BUTTON_KIND.TEXT} disabled={isDisabled} onClick={handleClear}>
            {clearTitle ?? DEFAULT_BTN_TITLE.CLEAR}
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
