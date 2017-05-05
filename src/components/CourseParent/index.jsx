import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';

import strings from 'i18n';
import styles from './course_parent.scss';

import img_course_parent_1 from './images/course_parent_1.png';
import img_course_parent_2 from './images/course_parent_2.png';
import img_course_parent_3 from './images/course_parent_3.png';
import img_course_parent_4 from './images/course_parent_4.png';

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
        <CommonContent className={styles.course_parent_1} innerHTML={strings.course_parent_1} image={img_course_parent_1} />
        <CommonContent className={styles.course_parent_2} innerHTML={strings.course_parent_2} image={img_course_parent_2} />
        <CommonContent className={styles.course_parent_3} innerHTML={strings.course_parent_3} image={img_course_parent_3} />
        <div
            className={styles.course_parent_4}>
            <Grid
                className={styles.mainBox}>
                <Row
                    className={styles.main}>
                    <Col xs
                        className={styles.imageBox}>
                        <figure
                            style={{
                                backgroundImage: `url(${img_course_parent_4})`
                            }}>
                            <ReactMarkdown
                                source={strings.course_parent_4 || ''}
                                className={styles.content} />
                        </figure>
                    </Col>
                </Row>
            </Grid>
        </div>
    </div>
);