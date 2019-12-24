import React from 'react';

import styles from './not-found.module.css';

export const NotFound = () => (
    <div className={styles.container}>
        <div className={styles.error}>
            <p className={styles.p}>4</p>
            <span className={styles.dracula}>
                <div className={styles.con}>
                    <div className={styles.hair}></div>
                    <div className={styles.hairR}></div>
                    <div className={styles.head}></div>
                    <div className={styles.eye}></div>
                    <div className={[styles.eye, styles.eyeR].join(' ')}></div>
                    <div className={styles.mouth}></div>
                    <div className={styles.blod}></div>
                    <div className={[styles.blod, styles.blod2].join(' ')}></div>
                </div>
            </span>
            <p className={styles.p}>4</p>

            <div className={styles.pageMs}>
                <p className={styles.pageMsg}> Oops, the page you're looking for Disappeared </p>
            </div>
        </div>
    </div>
);
