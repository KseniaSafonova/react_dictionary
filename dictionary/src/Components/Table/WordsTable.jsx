import TableString from "./TableString";
import TableTitle from "./TableTitle";
import React from "react";
import Context from "../../Context";
import { Table } from 'react-bootstrap';

export default class WordsTable extends React.Component {
    render() {
        return (
            <Table>
                <TableTitle />
                <Context.Consumer>
                    {value =>
                        value.map((word) =>
                            <TableString id={word.id}
                                english={word.english}
                                transcription={word.transcription}
                                russian={word.russian} />)
                    }
                </Context.Consumer>
            </Table>
        )
    }
}