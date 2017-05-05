import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';
import $script from 'scriptjs';

import ProductList from './Product';
import Concat from './Concat';
import Links from './Links';

import strings from 'i18n';
import styles from './index.scss';

class CNZZ extends Component {

    componentDidMount() {
        let cnzz_id = 1257817008;

        let cnzz_box = this.refs.cnzz;
        let cnzz_element = document.getElementById('cnzz_stat_icon_' + cnzz_id);

        if (cnzz_element) {
            cnzz_box.appendChild(cnzz_element);
        }
    }

    render() {
        return (
            <div ref='cnzz'></div>
        )
    }
}

export default () => (
    <div
        className={styles.footer}>
        <Grid>
            <Row
                className={styles.footerContent}>
                <ProductList />
                <Concat />
            </Row>
            <Row
                className={styles.footerSplit}>
                <Links />
            </Row>
            <Row>
                <ReactMarkdown
                    source={strings.footer_copyright || ''}
                    className={styles.footerCopyright} />
            </Row>
            <Row>
                <div
                    className={styles.footerCNZZ}>
                    <CNZZ />
                </div>
            </Row>
        </Grid>
    </div>
);