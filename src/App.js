import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import './index.scss';

function App() {
  return (
    <div className="App">
      {/* <FontAwesomeIcon icon={faEnvelope} /> */}
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
