import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import strings from 'i18n';
import styles from './index.scss';

class ProductList extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('/assets/config/product.json', {
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
            <div
                className={styles.productList}>
                <h2>{strings.footer_product}</h2>
                {this.state.data
                    .map((item, index) => (
                        <a key={index} href={item.url}>{item.title}</a>
                    ))}
            </div>
        )
    }
}

export default ProductList;