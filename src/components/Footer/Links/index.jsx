import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import strings from 'i18n';

class Links extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentWillMount() {
        fetch('/assets/config/links.json', {
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
            <ul>
                {this.state.data
                    .map((item, index) => (
                        <li key={index}>
                            <a href={item.url}>{item.title}</a>
                        </li>
                    ))}
            </ul>
        )
    }
}

export default Links;