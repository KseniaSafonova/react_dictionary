import React from 'react';
import styles from './../Styles/Quotes.module.css'

export default class Quotes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            isLoading: false,
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.loadQuotes();
    }


    loadQuotes = () => {

        const encodedParams = new URLSearchParams();
        encodedParams.append("q", "English is hard, but detectably so");

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': '283bed0e66msh80b99721933e309p115818jsn6780dcb2bbe4',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            },
            body: encodedParams
        };

        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/detect', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));

    }

    render() {
        return (
            <div className={styles.quotes} >
                <div></div>
            </div>
        )
    }
}

