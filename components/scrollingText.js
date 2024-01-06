import React from 'react'

import styles from './scrollingText.module.css';

const ScrollingText = ({ text }) => {
  return (
    <div className={styles.scrollingTextContainer}>
      <div className={styles.scrollingText}>{text}</div>
    </div>
  );
};

export default ScrollingText;