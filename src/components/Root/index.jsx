import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from 'components/Header';
import Footer from 'components/Footer';
import './normalize.css';
import fonts from './font.css';
import './common.scss';

const muiTheme = getMuiTheme({});

export default ({children}) => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div className={fonts['font-hei']}>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    </MuiThemeProvider>
);