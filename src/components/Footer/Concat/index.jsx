import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import strings from 'i18n';
import styles from './index.scss';

export default () => (
    <div
        className={styles.concat}>
        <ReactMarkdown
            source={strings.footer_concat || ''}
            className={styles.concatInfo} />
    </div>
);