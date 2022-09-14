import Card from "./Card";
import styles from './../Styles/CardsPage.module.css';
import React from "react";

export default class CardsPage extends React.Component {
    render() {
        const { words } = this.props;
        return (
            <div className={styles.cardsPage}>
                {
                    words.map((word) => <Card english={word.english} transcription={word.transcription} russian={word.russian} />)
                }
            </div>
        )
    }
}