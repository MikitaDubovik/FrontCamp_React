import React from 'react';

import {
  Logo,
  Title,
  TabButtonSection,
  TabButtonSectionTitles
} from '../../common';
import { SearchForm } from './search-form';
import styles from './header.module.css';

const FIND_YOUR_MOVIE = 'FIND YOUR MOVIE';

export const Header = props => {
  const {
    onClickTabButton,
    onClickSubmitButton,
    changeInputTextFieldValue,
    textInputValue
  } = props;

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>

      <div className={styles.searchContainer}>
        <Title content={FIND_YOUR_MOVIE} />
        <SearchForm
          onChangeTextInputValue={changeInputTextFieldValue}
          textInputValue={textInputValue}
          onClickSubmitButton={onClickSubmitButton}
        />
        <TabButtonSection
          sectionTitle={TabButtonSectionTitles.SEARCH_BY}
          tabButtonsTitles={[
            TabButtonSectionTitles.TITLE,
            TabButtonSectionTitles.GENRE            
          ]}
          onClickTabButton={onClickTabButton}
          type={TabButtonSectionTitles.SEARCH_BY}
        />
      </div>
    </div>
  );
};