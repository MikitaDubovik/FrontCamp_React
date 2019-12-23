import React from 'react';
import styles from './tab-buttons-section.module.css';
import { TabButtonContainer } from '../../../containers/tab-button'

export const TabButtonSectionTitles = {
  GENRE: 'GENRE',
  TITLE: 'TITLE',
  SEARCH_BY: 'SEARCH BY',

  SORT_BY: 'SORT BY',
  REALISE_DATE: 'RELEASE DATE',
  RAITING: 'RAITING'
};

export const TabButtonSection = props => {
  const { sectionTitle, tabButtonsTitles, onClickTabButton, type } = props;

  const createTabButtons = tabButtonsTitles =>
    tabButtonsTitles.map((tabButtonTitle, index) => (
      <TabButtonContainer
        tabButtonTitle={tabButtonTitle}
        onClickTabButton={onClickTabButton}
        key={tabButtonTitle}
        index={!!index}
        type={type}
      />
    ));

  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      {createTabButtons(tabButtonsTitles)}
    </div>
  );
};
