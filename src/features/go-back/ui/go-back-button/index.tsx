import { ArrowLeft } from '@/shared/assets';
import { Button, BUTTON_KIND, Typography, TYPOGRAPHY_KIND } from '@/shared/ui';
import { JSX, MouseEventHandler } from 'react';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

interface Props {
  to?: string;
}

export function GoBackButton({ to }: Props): JSX.Element {
  const navigate = useNavigate();
  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    if (to) return navigate(to);
    navigate(-1);
  };

  return (
    <Button
      kind={BUTTON_KIND.TEXT}
      icon={<div className={styles.icon} children={<ArrowLeft />} />}
      onClick={handleButtonClick}
    >
      <Typography kind={TYPOGRAPHY_KIND.SECONDARY}>Назад</Typography>
    </Button>
  );
}
