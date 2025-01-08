import './App.css';
import './static/css/header.css'
import './static/css/welcome.css'
import './static/css/second.css'
import './static/css/about.css'
import './static/css/galery.css'
import './static/css/offers.css'
import './static/css/faq.css'
import './static/css/maps.css'
import './static/css/footer.css'
import './static/css/popup.css'

import Popup from './components/Popup.jsx';

import Header from './components/Header';
import Welcome from './components/Welcome.jsx';
import Conditions from './components/Conditions.jsx';
import About from './components/About.jsx';
import Galery from './components/Swiper.jsx';
import Offers from './components/Offers.jsx';
import FAQ from './components/FAQ.jsx';
import Maps from './components/Maps.jsx';
import Footer from './components/Footer.jsx';

import { dataOffers, dataAbout, dataGalery } from './data/data';


function App() {
  return (

      <div className="App">
        <Popup data={dataGalery} />

        <Header/>
        <Welcome/>
        <Conditions />
        <Offers data={dataOffers}/>
        <About data={dataAbout}/>
        <Galery data={dataGalery}/>
        
        <FAQ />
        <Maps/>
        <Footer />
      </div>
    
  );
}

export default App;
