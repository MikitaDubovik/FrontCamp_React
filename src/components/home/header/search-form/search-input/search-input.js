import React from "react";

import styles from "./search-input.module.css";

export const SearchInput = props => {
  const { onChangeInputValue, inputValue } = props;

  return (
    <input
      type="text"
      size="40"
      placeholder="Quentin Tarantino"
      value={inputValue}
      onChange={onChangeInputValue}
      className={styles.textInput}
    />
  );
};