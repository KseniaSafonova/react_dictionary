import { useState } from 'react';
import { Button } from 'react-bootstrap';
import styles from './Table.module.css';
import Context from '../../Context';

export default function TableString(props) {
    const { id, english, transcription, russian } = props;
    const [pressed, setPressed] = useState(false);
    const [value, setValue] = useState({
        english,
        transcription,
        russian
    });

    const HandleCancel = () => {
        setPressed(!pressed);
    }

    const HandleChange = (event) => {
        setValue((word) => {
            return { ...word, [event.target.name]: event.target.value }
        })
    }

    const EditCancel = () => {
        value.english = english;
        value.transcription = transcription;
        value.russian = russian
    }

    return (

        <tbody>
            {
                pressed ?
                    <tr>
                        <td>{id}</td>
                        <td><input value={value.english} onChange={HandleChange} name={'english'} /></td>
                        <td><input value={value.transcription} onChange={HandleChange} name={'transcription'} /></td>
                        <td><input value={value.russian} onChange={HandleChange} name={'russian'} /></td>
                        <td>
                            <div className={styles.buttonBlock}>
                                <Button variant="outline-success" onClick={HandleCancel}>Save</Button>
                                <Button variant="outline-danger" onClick={() => { HandleCancel(); EditCancel(); }}>Cancel</Button>
                            </div>
                        </td>
                    </tr>
                    :
                    <tr>
                        <td>{id}</td>
                        <td>{value.english}</td>
                        <td>{value.transcription}</td>
                        <td>{value.russian}</td>
                        <td>
                            <div className={styles.buttonBlock}>
                                <Button variant="outline-warning" onClick={() => { setPressed(true) }}>Edit</Button>
                                <Button variant="outline-danger">Delete</Button>
                            </div>
                        </td>
                    </tr>
            }
        </tbody >
    )
}