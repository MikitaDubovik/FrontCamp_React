import React from 'react';

import styles from './tab-button.module.css';

export const TabButton = props => {
  let { title, onClickButton, rightRadius, type } = props;
  return (
    <div >
      <button
        className={[rightRadius ? styles.right : styles.left, type.toLowerCase() == title.toLowerCase() ? styles.buttonActive : ""].join(' ')}
        onClick={onClickButton}
      >
        {title}
      </button>
    </div>
  );
};