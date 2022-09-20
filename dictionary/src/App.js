import React from "react";
import WordsTable from "./Components/Table/WordsTable";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Game from "./Components/Game";
import CardsPage from './Components/CardsPage';
import styles from './Styles/Button.module.css'
import Context from "./Context";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      words: [],
      error: null
    }
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
    this.loadWords();
  }

  loadWords = () => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Oops! Something went wrong!');
        }
      })
      .then((response) => { this.setState({ words: response, isLoaded: true }) })
      .catch(error => this.setState({ error, isLoaded: false }));

  }



  render() {
    const { words, isLoaded } = this.state;

    return (
      <Context.Provider value={words}>
        <BrowserRouter>
          {
            isLoaded ?

              <div className="App">
                <Header>
                  <Link to='/' className={styles.button}>Table</Link>
                  <Link to='/cards' className={styles.button} >Cards</Link>
                  <Link to='/game' className={styles.button} >Game</Link>
                </Header>
                <Routes>
                  <Route path='/' element={<WordsTable />}></Route>
                  <Route path='cards' element={<CardsPage words={words} />}></Route>
                  <Route path='game' element={<Game words={words} />}></Route>

                  {/* <Route path=':error' element={<Error />}>

            </Route> */}
                </Routes>
              </div>
              :
              <h1>Is Loaded...</h1>
          }
        </BrowserRouter>
      </Context.Provider >
    )
  }
}
