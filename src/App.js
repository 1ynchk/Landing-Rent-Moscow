import './App.css';
import './static/css/header.css'
import './static/css/welcome.css'
import './static/css/second.css'
import './static/css/about.css'
import './static/css/galery.css'
import './static/css/offers.css'
import './static/css/faq.css'
import './static/css/maps.css'

import Popup from './components/Popup.jsx';

import Header from './components/Header';
import Welcome from './components/Welcome.jsx';
import Conditions from './components/Conditions.jsx';
import About from './components/About.jsx';
import Galery from './components/Swiper.jsx';
import Offers from './components/Offers.jsx';
import FAQ from './components/FAQ.jsx';
import Maps from './components/Maps.jsx';

function App() {
  return (
    <div className="App">
      <Popup />
      
      <Header/>
      <Welcome/>
      <Conditions />
      <Offers />
      <About/>
      <Galery/>
      
      <FAQ />
      <Maps/>
    </div>
  );
}

export default App;
