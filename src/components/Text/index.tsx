import React from 'react';
import styles from './index.module.scss';

interface TextProps {
  children: React.ReactNode;
  type: 'body' | 'title';
  id?: string;
  style?: React.CSSProperties;
}

const Text = ({ id, style, children, type }: TextProps) => {
  return (
    <p id={id} style={style} className={type === 'body' ? styles.text : styles.title}>
      {children}
    </p>
  );
};

export default Text;
