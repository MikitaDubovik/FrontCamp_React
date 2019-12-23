import React from "react";

import styles from "./title.module.css";

export const Title = props => {
  const { content } = props;
  return <h1 className={styles.title}>{content}</h1>;
};