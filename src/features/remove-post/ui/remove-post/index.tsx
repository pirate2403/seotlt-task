import { Close } from '@/shared/assets';
import { Button, BUTTON_KIND, BUTTON_SIZE, Spinner } from '@/shared/ui';
import { JSX, MouseEventHandler } from 'react';
import { $isLoading, handleRemove } from '../../model/remove-post-model';
import { useUnit } from 'effector-react';

interface Props {
  id: string;
  cb?: () => void;
}

export function RemovePost({ id, cb }: Props): JSX.Element {
  const isLoading = useUnit($isLoading(id));
  if (isLoading) return <Spinner small />;

  const handleRemovePost: MouseEventHandler<HTMLButtonElement> = () => {
    handleRemove({ id, cb });
  };

  return (
    <Button
      kind={BUTTON_KIND.ICON}
      size={BUTTON_SIZE.LG}
      icon={<Close width={12} height={12} />}
      onClick={handleRemovePost}
    />
  );
}
