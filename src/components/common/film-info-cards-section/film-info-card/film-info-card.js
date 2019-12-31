import React from 'react';

import styles from './film-info-card.module.css';
import { concatGenres, getReleaseYear } from '../../../../utils';
import { Poster } from '../../poster';
import { Link } from 'react-router-dom';
import { generatePathToFilmDetails } from '../../../../services/routes';

export const FilmInfoCard = props => {
  const { filmInfo } = props;
  const { poster_path, title, genres, release_date, id } = filmInfo;
  const relatedGenres = concatGenres(genres);
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className={styles.cardContainer}>
      <Link to={{ pathname: generatePathToFilmDetails(id) }}>
        <Poster title={title} poster_path={poster_path} />
      </Link>
      <div className={styles.filmInfoContainer}>
        <div className={styles.titleAndRealizeDataContainer}>
          <p className={styles.filmTitle}>{title}</p>
          <p className={styles.realizeData}>{releaseYear}</p>
        </div>
        <p className={styles.filmGenre}>{relatedGenres}</p>
      </div>
    </div>
  );
};