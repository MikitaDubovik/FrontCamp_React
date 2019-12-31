import React from 'react';

import styles from './poster.module.css';

export const Poster = props => {
  const { title, poster_path } = props;

  return <img alt={title} src={poster_path} className={styles.poster} />;
};