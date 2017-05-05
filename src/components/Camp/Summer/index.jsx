import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';

import strings from 'i18n';
import styles from './camp_summer.scss';

import img_camp_summer_1 from './images/camp_summer_1.png';
import img_camp_summer_2 from './images/camp_summer_2.png';

const CommonContent = ({className, innerHTML, image}) => (
    <div
        className={className}>
        <Grid
            className={styles.mainBox}>
            <Row
                className={styles.main}>
                <Col xs
                    className={styles.contentBox}>
                    <ReactMarkdown
                        source={innerHTML || ''}
                        className={styles.content} />
                </Col>
                <Col xs
                    className={styles.imageBox}>
                    <figure
                        style={{
                            backgroundImage: `url(${image})`
                        }}></figure>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default () => (
    <div>
        <CommonContent className={styles.camp_summer_1} innerHTML={strings.camp_summer_1} image={img_camp_summer_1} />
        <CommonContent className={styles.camp_summer_2} innerHTML={strings.camp_summer_2} image={img_camp_summer_2} />
    </div>
);