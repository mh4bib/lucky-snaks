import './App.css';
import Body from './Component/Body/Body';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCookie, faCookieBite } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <h1><FontAwesomeIcon icon={faCookie} /> Snacks Raffles <FontAwesomeIcon icon={faCookieBite} /></h1>
      <Body></Body>
    </div>
  );
}

export default App;
