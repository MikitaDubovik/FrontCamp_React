import React from "react";

import styles from "./search-button.module.css";

export const SearchButton = props => {
  const { onClickButton } = props;

  return (
    <button className={styles.button} onClick={onClickButton}>
      SEARCH
    </button>
  );
};