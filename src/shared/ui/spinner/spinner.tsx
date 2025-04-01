import cn from 'classnames';
import { JSX } from 'react';
import { SPINNER_TYPE, SPINNER_SIZE } from './constants';
import styles from './styles.module.scss';

interface Props {
  secondary?: boolean;
  small?: boolean;
  center?: boolean;
}

export function Spinner({ secondary, small, center }: Props): JSX.Element {
  const type = secondary ? SPINNER_TYPE.SECONDARY : SPINNER_TYPE.PRIMARY;
  const size = small ? SPINNER_SIZE.SM : SPINNER_SIZE.LG;
  return <div className={cn(styles.root, styles[type], styles[size], { [styles.center]: center })} />;
}
