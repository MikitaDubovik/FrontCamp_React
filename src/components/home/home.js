import React from 'react';

import {
  Footer,
  FilmInfoCardsSection,
  TabButtonSection,
  TabButtonSectionTitles,
  FilmsCardsSummary,
  FilmsCardSummaryType,
} from '../common';
import { Header } from './header';
import styles from './home.module.css';

export const Home = ({
  filmsInfo,
  onClickTabButton,
  textInputValue,
  changeTextInputValue,
  onClickSubmitButton,
}) => {
  return (
    <div className={styles.container}>
      <Header
        onClickTabButton={onClickTabButton}
        onClickSubmitButton={onClickSubmitButton}
        textInputValue={textInputValue}
        changeInputTextFieldValue={changeTextInputValue}
      />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary
          filmsSummary={`${filmsInfo.length}`}
          summaryType={FilmsCardSummaryType.FILMS_AMOUNT}
        />
        <TabButtonSection
          sectionTitle={TabButtonSectionTitles.SORT_BY}
          tabButtonsTitles={[TabButtonSectionTitles.REALISE_DATE, TabButtonSectionTitles.RAITING]}
          onClickTabButton={onClickTabButton}
          type = {TabButtonSectionTitles.SORT_BY}
        />
      </div>
      <FilmInfoCardsSection filmsInfo={filmsInfo} onClickTabButton={onClickTabButton} />
      <Footer />
    </div>
  );
};