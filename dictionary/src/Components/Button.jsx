import React from 'react';
import styles from './../Styles/Button.module.css';

export default class Button extends React.Component {
    render() {
        const { showTranslation, count } = this.props;
        return (
            <button className={styles.button} onClick={() => { showTranslation(); count(); }}>{this.props.title}</button>
        )
    }
}