import React from "react"

export default class TableTitle extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>ID</th>
                    <th>ENGLISH</th>
                    <th>TRANSCRIPTION</th>
                    <th>RUSSIAN</th>
                    <th>OPTIONS</th>
                </tr>
            </thead>
        )
    }
}