import React from 'react';
import styles from './film-cards-summary.module.css';

export const FilmsCardSummaryType = {
  FILMS_AMOUNT: 1,
  GENRE: 2
};

export const FilmsCardsSummary = ({ summaryType, filmsSummary }) => {
  return summaryType === FilmsCardSummaryType.FILMS_AMOUNT ? (
    <p className={styles.text}>{`${filmsSummary} movies found`}</p>
  ) : (
    <p className={styles.text}>{`Films by ${filmsSummary} genre`}</p>
  );
};