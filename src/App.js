import './App.css';
import Countries from './components/Countries/Countries';

import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>

    </div>
  );
}



/* function Countries() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])

  return (
    <div>
      <h2>Trsvelling around the world!</h2>
      <h3>{countries.length}</h3>
      {
        countries.map(country => <Countrie name={country.name} capital={country.capital}></Countrie>)
      }
    </div>
  )
}

function Countrie(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <h4>Capital: {props.capital}</h4>
    </div>
  )
} */

export default App;
