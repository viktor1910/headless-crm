import React from 'react';
import styles from './index.module.scss';

interface TextProps {
  children: React.ReactNode;
  type: 'body' | 'title' | 'smallBody';
  id?: string;
  style?: React.CSSProperties;
}

const defineClass = (type: 'body' | 'title' | 'smallBody') => {
  switch (type) {
    case 'body':
      return styles.text;

    case 'title':
      return styles.title;

    case 'smallBody':
      return styles.smallBody;
    default:
      break;
  }
};

const Text = ({ id, style, children, type }: TextProps) => {
  return (
    <p id={id} style={style} className={defineClass(type)}>
      {children}
    </p>
  );
};

export default Text;
