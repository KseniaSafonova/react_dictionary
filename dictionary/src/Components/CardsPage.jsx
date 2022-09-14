import Card from "./Card";
import styles from './../Styles/CardsPage.module.css';

export default function CardsPage(props) {
    return (
        <div className={styles.cardsPage}>
            {
                props.words.map((word) => <Card english={word.english} transcription={word.transcription} russian={word.russian} />)
            }
        </div>
    )
};