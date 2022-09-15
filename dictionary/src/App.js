import React from "react";
import TableString from './Components//Table/TableString'
import TableTitle from "./Components/Table/TableTitle";
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header';
import Game from "./Components/Game";
import CardsPage from './Components/CardsPage';
import styles from './Styles/Button.module.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


const words = [
  { id: '1', english: 'footprint', transcription: '[fʊtprɪnt]', russian: 'след' },
  { id: '2', english: 'pollution', transcription: '[pəˈluʃən]', russian: 'загрязнение' },
  { id: '3', english: 'contaminant', transcription: '[kəntˈæmɪnənt]', russian: 'загрязнитель' },
  { id: '4', english: 'wastes', transcription: '[wˈeɪːsts]', russian: 'отходы' },
  { id: '5', english: 'sustainable', transcription: '[səˈsteɪnəbəl]', russian: 'устойчивый' },
  { id: '6', english: 'recycling', transcription: '[riˈsaɪkəlɪŋ]', russian: 'переработка' },
  { id: '7', english: 'carbon dioxide', transcription: '[ˈkɑrbən daɪˈɑkˌsaɪd]', russian: 'углекислый газ' },
  { id: '8', english: 'population growth', transcription: '[pɒpjʊlˈeɪːʃn̩ grouθ]', russian: 'рост населения' },
  { id: '9', english: 'wind power', transcription: '[wɪnd ˈpaʊər]', russian: 'энергия ветра' },
  { id: '10', english: 'solar power', transcription: '[ˈsoʊlər ˈpaʊər]', russian: 'энергия солнца' },
  { id: '11', english: 'global warming', transcription: '[ˈgləʊbəl ˈwɔːmɪŋ]', russian: 'глобальное потепление' },
  { id: '12', english: 'greenhouse gases', transcription: '[grˈiːnhaʊːs gˈæsɪz]', russian: 'парниковые газы' },
  { id: '13', english: 'renewable sources', transcription: '[rɪnjˈuːəbl sˈɔːsɪz]', russian: 'возобновляемые источники' },
  { id: '14', english: 'negative impact', transcription: '[nˈegətɪv ˈɪmpækt]', russian: 'негативное влияние' },
  { id: '15', english: 'sedimentary', transcription: '[ˌsɛdəˈmɛntəri]', russian: 'осадочный' },
  { id: '16', english: 'sedimentary complex', transcription: '[ˌsɛdəˈmɛntəri ˈkɑmplɛks]', russian: 'серия осадочных пластов' },
  { id: '17', english: 'coal', transcription: '[koʊl]', russian: 'уголь' },
  { id: '18', english: 'seismic', transcription: '[ˈsaɪzmɪk]', russian: 'сейсмический' },
  { id: '19', english: 'shelf', transcription: '[ʃɛlf]', russian: 'шельф' },
  { id: '20', english: 'subduction', transcription: '[səbˈdʌkʃən]', russian: 'субдукция' },
  { id: '21', english: 'tectonic plate', transcription: '[tɛkˈtɑnɪk pleɪt]', russian: 'тектоническая плита' },
  { id: '22', english: 'erosion', transcription: '[ɪˈroʊʒən]', russian: 'эрозия' },
  { id: '23', english: 'extraction', transcription: '[ɛkˈstrækʃən]', russian: 'добыча' },
  { id: '24', english: 'igneous', transcription: '[ˈɪgniəs]', russian: 'вулканического происхождения' },
  { id: '25', english: 'fossil fuel deposit', transcription: '[ˈfɑsəl ˈfjuəl dəˈpɑzɪt]', russian: 'месторождение горючих полезных ископаемых' }]


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    }
  }

  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    const { isLoaded } = this.state;

    return (
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
                <Route path='/' element={<Table>
                  <TableTitle />
                  {
                    words.map((word) => <TableString id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} />)
                  }
                </Table>}>

                </Route>
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
    )
  }
}
