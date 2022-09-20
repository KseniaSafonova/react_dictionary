import Card from "./Card";
import styles from './../Styles/CardsPage.module.css';
import React from "react";
import Context from "../Context";


export default class CardsPage extends React.Component {
    render() {
        return (
            <div className={styles.cardsPage}>
                <Context.Consumer>
                    {
                        value => value.map((word) =>
                            <Card english={word.english}
                                russian={word.russian}
                                transcription={word.transcription} />)
                    }
                </Context.Consumer>
            </div>
        )
    }
}