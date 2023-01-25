import cn from 'classnames';

import styles from './SimpleText.module.css';

import { ChangeTypeToStyle } from '~/hook';

interface SimpleTextProps {
  text: string;
  type?: string;
}

const SimpleText = ({ text, type = 'medium' }: SimpleTextProps) => {
  return (
    <div className={cn(styles.simple_text, ChangeTypeToStyle(type))}>
      {text}
    </div>
  );
};

export default SimpleText;
