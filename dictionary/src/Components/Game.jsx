import Card from "./Card";
import styles from "./../Styles/Game.module.css"
import { useState } from "react";


export default function Game({ words }) {

    const [number, changeNumber] = useState(0);
    const [count, changeCount] = useState(0);


    const ShowBack = () => {
        if (number >= 1) {
            changeNumber(number - 1);
        }
        else {
            alert('Список слов закончился!')
        }
    }

    const ShowForward = () => {
        if (number >= words.length - 1) {
            alert('Список слов закончился!')
        }
        else {
            changeNumber(number + 1);
        }
    }

    const AddCount = () => {
        console.log(words.length)
        changeCount(count + 1);
    }

    return (
        <>
            <div className={styles.count}>Изучено слов: {count}</div>
            <div className={styles.container}>
                <button className={styles.button} onClick={ShowBack}> &lt;&lt; </button>
                <Card english={words[number].english} transcription={words[number].transcription} russian={words[number].russian} addCount={AddCount} />
                <button className={styles.button} onClick={ShowForward}> &gt;&gt;  </button>
            </div>
            <div className={styles.number}>{number + 1} / {words.length}</div>
        </>
    )
}