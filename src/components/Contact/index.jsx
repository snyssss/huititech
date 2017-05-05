import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ReactMarkdown from 'react-markdown';
import { Parser, HtmlRenderer } from 'commonmark';

import strings from 'i18n';
import Loading from 'components/Loading';
import headerStyles from 'components/Header/header.scss';
import styles from './contact.scss';

const infoContent = (() => {
    const reader = new Parser();
    const writer = new HtmlRenderer();
    const parsed = reader.parse(strings.contact_simple);
    return writer.render(parsed);
})();

const ak = 'OQz6QuZIpYjIGDKavejOubnPeZnp2LrC';

class AsyncBMap extends Component {

    componentWillMount() {
        // 定位元素用于地图生成
        let self = this;
        // 生成时间戳用于命名回调函数
        let func = '_$' + Date.now();
        // 地图初始化函数
        window[func] = () => {
            let map = new BMap.Map(self.refs.map);
            let point = new BMap.Point(120.181399, 30.192881);
            let marker = new BMap.Marker(point);
	        let infoWindow = new BMap.InfoWindow(`
                <div class="${styles.tipContent}">
                    <a href="http://j.map.baidu.com/UlxqH">
                        ${infoContent}
                    </a>
                </div>
            `);
	        map.centerAndZoom(point, 18);
            map.enableScrollWheelZoom();
            map.addOverlay(marker);
            marker.openInfoWindow(infoWindow);
            marker.addEventListener('click', () => {
	            marker.openInfoWindow(infoWindow);
            });
        }
        // 异步加载地图插件
        let script = document.createElement('script');
        script.async = 'async';
        script.type = 'text/javascript';
        script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=' + func;
        document.body.appendChild(script);
    }

    render() {
        return (
            <div
                ref='map'
                className={styles.map}>
                    <Loading />
            </div>
        )
    }
}

export default () => (
    <div
        className={styles.main}>
        <div
            className={headerStyles.headerHolder} />
        <Grid>
            <ReactMarkdown
                source={strings.contact || ''}
                className={styles.info} />
            <AsyncBMap />
        </Grid>
    </div>
);