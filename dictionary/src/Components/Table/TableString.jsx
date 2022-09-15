import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Table.module.css'


// export default function TableString(props) {
//     const { id, english, transcription, russian } = props;
//     const [pressed, setPressed] = useState(false);
//     const [value, setValue] = useState({
//         english,
//         transcription,
//         russian
//     });

//     const HandleCancel = () => {
//         setPressed(!pressed);
//     }

//     const HandleChange = (event) => {
//         setValue((word) => {
//             return { ...word, [event.target.name]: event.target.value }
//         })
//     }
//     const EditCancel = () => {
//         value.english = english;
//         value.transcription = transcription;
//         value.russian = russian
//     }
//     return (
//         <tbody>
//         </tbody >
//     )
// }

export default class TableString extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            english: this.props.english,
            transcription: this.props.transcription,
            russian: this.props.russian
        }
    }

    HandleCancel = () => {
        this.setState({ pressed: true });
    }

    // HandleChange = (event) => {
    //     setValue((word) => {
    //         return { ...word, [event.target.name]: event.target.value }
    //     })
    // }

    HandleChange = (event) => {
        this.setState({ english: event.target.value })
    }

    // EditCancel = () => {
    //     this.setState({ english: english, transcription: transcription, russian: russian })
    // }

    render() {
        const { pressed } = this.state;
        const { id, english, transcription, russian } = this.props;
        return (
            <tbody>
                {
                    pressed ?
                        <tr>
                            <td>{id}</td>
                            <td><input value={english} onChange={this.HandleChange} name={'english'} /></td>
                            <td><input value={transcription} onChange={this.HandleChange} name={'transcription'} /></td>
                            <td><input value={russian} onChange={this.HandleChange} name={'russian'} /></td>
                            <td>
                                <div className={styles.buttonBlock}>
                                    <Button variant="outline-success" onClick={this.HandleCancel}>Save</Button>
                                    <Button variant="outline-danger" onClick={() => { this.HandleCancel(); this.EditCancel(); }}>Cancel</Button>
                                </div>
                            </td>
                        </tr>
                        :
                        <tr>
                            <td>{id}</td>
                            <td>{english}</td>
                            <td>{transcription}</td>
                            <td>{russian}</td>
                            <td>
                                <div className={styles.buttonBlock}>
                                    <Button variant="outline-warning" onClick={() => { this.setState({ pressed: true }); }}>Edit</Button>
                                    <Button variant="outline-danger">Delete</Button>
                                </div>
                            </td>
                        </tr>
                }
            </tbody >
        )
    }
}