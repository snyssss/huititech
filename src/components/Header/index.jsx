import React from 'react';
import { IndexLink, Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';

import strings from 'i18n';
import styles from './header.scss';
import logo from './logo.png';

const navbarPages = [
    <IndexLink className={styles.headerLink} to="/">
        <img src={logo} />
        <span className={styles.title}>{strings.system_name}</span>
    </IndexLink>,
    <IndexLink className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/">
        <span>{strings.header_home}</span>
    </IndexLink>,
    <Link className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/courses">
        <span>{strings.header_courses}</span>
    </Link>,
    <Link className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/summer-camp">
        <span>{strings.header_summer_camp}</span>
    </Link>,
    <Link className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/parent-courses">
        <span>{strings.header_parent_courses}</span>
    </Link>,
    <Link className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/app">
        <span>{strings.header_app}</span>
    </Link>,
    <Link className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/download">
        <span>{strings.header_download}</span>
    </Link>,
    <Link className={styles.headerLink} activeClassName={styles.headerLinkActive} to="/contact">
        <span>{strings.header_contact}</span>
    </Link>
];

class MobileGroup extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
        this.handleToggle = () => this.setState({
            open: !this.state.open
        });
        this.handleClose = () => this.setState({
            open: false
        });
    }

    render() {
        return (
            <div>
                <div
                    className={styles.headerMobile}>
                    <div
                        className={styles.logo}>
                        <img src={logo}/>
                    </div>
                    <div
                        className={styles.title}>
                        {document.title}
                    </div>
                    <div>
                        <IconButton
                            onTouchTap={this.handleToggle}
                            style={{
                                width: 42,
                                height: 42,
                                padding: 8
                            }}
                                iconStyle={{
                                color: '#eee'
                            }}>
                            <MenuIcon/>
                        </IconButton>
                    </div>
                </div>
                <Drawer
                    docked={false}
                    openSecondary={true}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                    className={styles.slideMenu}>
                    {navbarPages
                        .slice(1, navbarPages.length)
                        .map((item, index) => (
                            <MenuItem key={index} onTouchTap={this.handleClose}>
                                {React.cloneElement(item)}
                            </MenuItem>
                        ))}
                </Drawer>
            </div>
        );
    }
}

const TableGroup = () => (
    <ul className={styles.headerTable}>
        {navbarPages
            .map(function (page) {
                return [
                    <li>{React.cloneElement(page)}</li>, ' '];
        })}
    </ul>
);

export default () => (
    <div className={styles.header}>
        <div className={styles.headerContent}>
            <MobileGroup/>
            <TableGroup/>
        </div>
    </div>
);