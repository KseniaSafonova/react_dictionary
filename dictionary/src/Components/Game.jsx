import React from "react";
import Card from "./Card";
import styles from "./../Styles/Game.module.css";

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            count: 0
        }
    }

    ShowBack = () => {
        if (this.state.number >= 1) {
            this.setState({ number: this.state.number - 1 });
        }
        else {
            alert('Список слов закончился!')
        }
    }

    ShowForward = () => {
        if (this.state.number >= this.props.words.length - 1) {
            alert('Список слов закончился!')
        }
        else {
            this.setState({ number: this.state.number + 1 });
        }
    }

    AddCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        const { words } = this.props;
        return (
            <>
                <div className={styles.count}>Изучено слов: {this.state.count}</div>
                <div className={styles.container}>
                    <button className={styles.button} onClick={this.ShowBack}> &lt;&lt; </button>
                    <Card english={words[this.state.number].english} transcription={words[this.state.number].transcription} russian={words[this.state.number].russian} AddCount={this.AddCount} />
                    <button className={styles.button} onClick={this.ShowForward}> &gt;&gt;  </button>
                </div>
                <div className={styles.number}>{this.state.number + 1} / {words.length}</div>
            </>
        )
    }
}