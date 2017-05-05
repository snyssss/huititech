import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';
import RaisedButton from 'material-ui/RaisedButton';
import DownloadIcon from 'material-ui/svg-icons/file/file-download';
import fetch from 'isomorphic-fetch';

import strings from 'i18n';
import headerStyles from 'components/Header/header.scss';
import styles from './download.scss';

const DownloadItem = ({ params }) => (
    <Row>
        <Col xs
            className={styles.item}>
            <div
                className={styles.main}>
                <img src={params.icon} />
                <h1>{params.title}</h1>
                <RaisedButton
                    href={params.url}
                    download={params.download || false}
                    icon={<DownloadIcon />}
                    label={strings.download}
                    labelColor='#fff'
                    backgroundColor='#0088cc'/>
            </div>
            <ReactMarkdown
                source={params.description || ''}
                className={styles.description} />
            <ReactMarkdown
                source={params.extra || ''}
                className={styles.extra} />
        </Col>
    </Row>
);

class DownloadList extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('/assets/config/download.json', {
            headers: {
                'Cache-Control': 'no-cache'
        }})
            .then(response => response.json())
            .then((json) => {
                this.setState({
                    data: json
                });
            });
    }

    render() {
        return (
            <Grid
                className={styles.list}>
                {this.state.data
                    .map((item, index) => (
                        <DownloadItem key={index} params={item} />
                    ))}
            </Grid>
        )
    }
}

export default () => (
    <div>
        <div
            className={headerStyles.headerHolder} />
        <DownloadList />
    </div>
);