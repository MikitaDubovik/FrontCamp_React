import React, { Component } from 'react';

import { SearchInput } from './search-input';
import { SearchButton } from './search-button';
import { Link } from 'react-router-dom';
import styles from './search-form.module.css';
import { store } from '../../../../store';
import { generateUrl } from '../../../../services';

export const SearchForm = props => {
  const { onChangeTextInputValue, textInputValue, onClickSubmitButton } = props;
  
  let searchParams = {
    search: store.getState().textInputValue,
    searchBy: store.getState().searchBy,
    sortBy: store.getState().sortBy
  }

  let link = generateUrl(searchParams).split('?')[1];

  return (
    <div className={styles.container}>
      <SearchInput
        onChangeInputValue={onChangeTextInputValue}
        inputValue={textInputValue}
      />
      <Link to={`/search/${link}`}>
        <SearchButton onClickButton={onClickSubmitButton} />
      </Link>
    </div>
  );
};