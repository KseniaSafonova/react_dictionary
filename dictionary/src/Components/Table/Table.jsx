import TableString from "./TableString";
import TableTitle from "./TableTitle";
import React from "react";
import Context from "../../Context";

export default class Table extends React.Component {
    render() {
        return (
            <Context.Consumer>
                {/* <TableTitle /> */}
                {value => {
                    value.words.map((word) => <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />)
                }
                }
            </Context.Consumer>
        )
    }
}