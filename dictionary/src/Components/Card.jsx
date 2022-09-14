import Button from './Button';
import styles from './../Styles/Card.module.css';
import { useState } from 'react';

export default function Card(props) {
    const { english, transcription, russian, addCount } = props;

    const [pressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!pressed);
    }
    return (
        <div className={styles.card}>
            <p>{english}</p>
            <p>{transcription}</p>

            {
                pressed ? <p onClick={() => setPressed(false)}>{russian}</p> : <Button title='Показать перевод' showTranslation={handleClick} Count={addCount} />
            }

        </div>
    )
};