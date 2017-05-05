import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import AndroidIcon from 'material-ui/svg-icons/Action/android';
import IOSIcon from 'material-ui/svg-icons/Hardware/phone-iphone';

import strings from 'i18n';
import styles from './app.scss';

import img_app_1 from './images/app_1.png';
import img_app_2 from './images/app_2&4.png';
import img_app_3 from './images/app_3.png';
import img_app_4 from './images/app_2&4.png';
import img_app_5_1 from './images/app_5_1.png';
import img_app_5_2 from './images/app_5_2.png';
import img_app_5_3 from './images/app_5_3.png';
import img_app_6 from './images/app_6.png';
import img_app_follow from './images/app_follow.png';

const androidUrl = 'http://app.huititech.com/android/czlm/apk/czlm.apk';
const iosUrl = 'https://itunes.apple.com/cn/app/%E6%88%90%E9%95%BF%E8%81%94%E8%90%8C%E5%AE%B6%E9%95%BF/id1215559005?l=zh&ls=1&mt=8';

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

const App_1 = () => (
    <div
        className={styles.app_1}>
        <Grid
            className={styles.mainBox}>
            <Row
                className={styles.main}>
                <Col xs
                    className={styles.imageBox}>
                    <figure
                        style={{
                            backgroundImage: `url(${img_app_1})`
                        }}></figure>
                </Col>
                <Col xs
                    className={styles.contentBox}>
                    <ReactMarkdown
                        source={strings.app_1 || ''}
                        className={styles.content} />
                    <div
                        className={styles.extraBox}>
                        <div
                            className={styles.left}>
                            <RaisedButton
                                href={androidUrl}
                                disabled={androidUrl ? false : true}
                                icon={<AndroidIcon />}
                                label="Android"
                                buttonStyle={{
                                    textAlign: 'left'
                                }}/>
                            <RaisedButton
                                href={iosUrl}
                                disabled={iosUrl ? false : true}
                                icon={<IOSIcon />}
                                label="iOS"
                                buttonStyle={{
                                    textAlign: 'left'
                                }}/>
                        </div>
                        <div
                            className={styles.right}>
                            <ReactMarkdown
                                source={strings.app_follow || ''} />
                            <figure
                                style={{
                                    backgroundImage: `url(${img_app_follow})`
                                }}></figure>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
);

const App_5 = () => (
    <div
        className={styles.app_5}>
        <Grid
            className={styles.mainBox}>
            <Row
                className={styles.main}>
                <Col xs
                    className={styles.contentBox}>
                    <ReactMarkdown
                        source={strings.app_5 || ''}
                        className={styles.content} />
                </Col>
                <Col xs
                    className={styles.imageBox}>
                    <div
                        className={styles.img}>
                        <ReactMarkdown
                            source={strings.app_5_1 || ''}
                            className={styles.info} />
                        <figure
                            style={{
                                backgroundImage: `url(${img_app_5_1})`
                            }}></figure>
                    </div>
                    <div
                        className={styles.img}>
                        <ReactMarkdown
                            source={strings.app_5_2 || ''}
                            className={styles.info} />
                        <figure
                            style={{
                                backgroundImage: `url(${img_app_5_2})`
                            }}></figure>
                    </div>
                    <div
                        className={styles.img}>
                        <ReactMarkdown
                            source={strings.app_5_3 || ''}
                            className={styles.info} />
                        <figure
                            style={{
                                backgroundImage: `url(${img_app_5_3})`
                            }}></figure>
                    </div>
                </Col>
            </Row>
        </Grid>
    </div>
);

export default () => (
    <div>
        <App_1 />
        <CommonContent className={styles.app_2} innerHTML={strings.app_2} image={img_app_2} />
        <CommonContent className={styles.app_3} innerHTML={strings.app_3} image={img_app_3} />
        <CommonContent className={styles.app_4} innerHTML={strings.app_4} image={img_app_4} />
        <App_5 />
        <CommonContent className={styles.app_6} innerHTML={strings.app_6} image={img_app_6} />
    </div>
);