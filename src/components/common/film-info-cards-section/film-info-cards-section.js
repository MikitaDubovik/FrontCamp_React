import React from 'react';

import styles from './film-info-cards-section.module.css';
import { FilmInfoCard } from './film-info-card';
import {
  TabButtonSection,
  TabButtonSectionTitles
} from '../tab-buttons-section';

const createFilmInfoCards = filmsInfo => {
  if (!filmsInfo.length) return null;

  return filmsInfo.map(info => <FilmInfoCard key={info.id} filmInfo={info} />);
};

export const FilmInfoCardsSection = props => {
  const { filmsInfo, onClickTabButton } = props;
  const filmsInfoCards = createFilmInfoCards(filmsInfo);

  return (
    <>
      {filmsInfoCards ? (
        <div className={styles.container}>{filmsInfoCards}</div>
      ) : (
        <p className={styles.noFilmsMessage}>No films found</p>
      )}
    </>
  );
};