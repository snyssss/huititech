import React from 'react';
import ReactMarkdown from 'react-markdown';
import Swiper from 'react-id-swiper';
import fetch from 'isomorphic-fetch';

import 'react-id-swiper/src/styles/scss/swiper.scss';
import styles from './banner.scss';

const Slide = ({ params }) => (
    <div
        className={styles.slide}>
        <div
            className={styles.slideItem}
            style={{
                background: params.background
            }}>
            <ReactMarkdown
                source={params.content || ''}
                className={styles.bannerContent} />
            <figure style={{
                backgroundImage: `url(${params.url})`
            }}></figure>
        </div>
    </div>
);

class Banner extends React.Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('/assets/config/banner.json', {
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
        const params = {
            observer: true,
            pagination: '.swiper-pagination',
            paginationCustomizedClass: `${styles.pagination}`,
            paginationClickable: true,
            effect: 'fade',
            autoplay: 5000
        };
        return (
            <Swiper {...params}>
                {this.state.data
                    .map((item, index) => (
                        <div key={index}>
                            <Slide params={item} />
                        </div>
                    ))}
            </Swiper>
        )
    }
}

export default Banner;