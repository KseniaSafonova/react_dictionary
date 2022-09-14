import React from 'react';
import styles from './../Styles/Header.module.css'

export default class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                {this.props.children}
            </div>
        )
    }
}