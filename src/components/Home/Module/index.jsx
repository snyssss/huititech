import React from 'react';
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';

import strings from 'i18n';
import styles from './module.scss';

import img_download from './images/download.png';
import img_courses from './images/courses.png';
import img_summerCamp from './images/summer-camp.png';
import img_parentCourses from './images/parent-courses.png';
import img_app from './images/app.png';

const Module = ({url, text, image}) => (
    <Link
        to={url}
        className={styles.link}
        style={{
            backgroundImage: `url(${image})`
        }}>
        {text}
    </Link>
)

export default () => (
    <Row
        className={styles.row}>
        <Col xs={12} sm={4}>
            <Module
                url={'/download'}
                text={strings.header_download}
                image={img_download} />
        </Col>
        <Col xs={12} sm={4}>
            <Module
                url={'/courses'}
                text={strings.header_courses}
                image={img_courses} />
        </Col>
        <Col xs={12} sm={4}>
            <Module
                url={'/summer-camp'}
                text={strings.header_summer_camp}
                image={img_summerCamp} />
        </Col>
        <Col xs={12} sm={6}>
            <Module
                url={'/parent-courses'}
                text={strings.header_parent_courses}
                image={img_parentCourses} />
        </Col>
        <Col xs={12} sm={6}>
            <Module
                url={'/app'}
                text={strings.header_app}
                image={img_app} />
        </Col>
    </Row>
);