import { useGate, useUnit } from 'effector-react';
import { JSX } from 'react';
import { useNavigate } from 'react-router';
import { $isLoading, $isShowDone, CreatePostGate, onSubmitFormFx } from '../../model/create-post-model';
import { FormValues } from '../../model/types';
import { BaseForm } from '../base-form';

export function CreatePostForm(): JSX.Element {
  const navigate = useNavigate();
  useGate(CreatePostGate, { navigate });
  const [isLoading, isShowDone] = useUnit([$isLoading, $isShowDone]);

  const handleFormSubmit = (values: FormValues) => {
    onSubmitFormFx(values);
  };

  return <BaseForm isLoading={isLoading} isShowDone={isShowDone} onSubmit={handleFormSubmit} />;
}
