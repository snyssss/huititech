import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';

import strings from 'i18n';
import styles from './course.scss';

import img_course_1 from './images/course_1.png';
import img_course_2 from './images/course_2.png';
import img_course_3 from './images/course_3.png';

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
        <CommonContent className={styles.course_1} innerHTML={strings.course_1} image={img_course_1} />
        <CommonContent className={styles.course_2} innerHTML={strings.course_2} image={img_course_2} />
        <CommonContent className={styles.course_3} innerHTML={strings.course_3} image={img_course_3} />
    </div>
);