import React from 'react';

import { Header } from './header-detail-film-info';
import styles from './detail-film-info.module.css';
import { FilmInfoCardsSection, Footer, FilmsCardsSummary, FilmsCardSummaryType } from '../common';

export const DetailFilmInfo = (props) => {
  const { filmsTheSameGenre, filmInfo } = props;

  return (
    <div className={styles.container}>
      <Header filmInfo={filmInfo} />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary
          summaryType={FilmsCardSummaryType.GENRE}
          filmsSummary={filmInfo.genres[0]}
        />
      </div>
      <FilmInfoCardsSection filmsInfo={filmsTheSameGenre} onClickTabButton={() => {}} />
      <Footer />
    </div>
  );
};