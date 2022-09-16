import React from 'react';
import Button from './Button';
import styles from './../Styles/Card.module.css';
import Context from '../Context';


export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
        }
    }

    handleClick = () => {
        this.setState({ pressed: true });
    }

    handleCancel = () => {
        this.setState({ pressed: false });
    }
    render() {
        const { english, transcription, russian, AddCount } = this.props;
        return (
            <Context.Consumer>
                {value => <div className={styles.card}>
                    <p>{value.english}</p>
                    <p>{value.transcription}</p>
                    {
                        this.state.pressed ?
                            <p onClick={this.handleCancel}>{value.russian}</p>
                            :
                            <Button title='Показать перевод' showTranslation={this.handleClick} count={AddCount} />
                    }
                </div>}

            </Context.Consumer>
        )
    }
}