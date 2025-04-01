import { Post } from '@/entities/post';
import { useGate, useUnit } from 'effector-react';
import { JSX } from 'react';
import { useNavigate, useParams } from 'react-router';
import { $currentPost, $isLoading, $isShowDone, EditPostGate, onSubmitFormFx } from '../../model/edit-post-model';
import { FormValues } from '../../model/types';
import { BaseForm } from '../base-form';

export function EditPostForm(): JSX.Element {
  const { id } = useParams<Pick<Post, 'id'>>();
  const navigate = useNavigate();
  useGate(EditPostGate, { navigate, id });
  const [isLoading, isShowDone, post] = useUnit([$isLoading, $isShowDone, $currentPost]);

  const handleFormSubmit = (values: FormValues) => {
    onSubmitFormFx(values);
  };

  return (
    <BaseForm
      initialValues={{ title: post?.title || '', text: post?.text || '' }}
      isLoading={isLoading}
      isShowDone={isShowDone}
      onSubmit={handleFormSubmit}
    />
  );
}
