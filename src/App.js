import './App.css';
import './static/css/header.css'
import './static/css/welcome.css'
import './static/css/second.css'
import './static/css/about.css'

import Header from './components/Header';
import Welcome from './components/Welcome.jsx';
import Conditions from './components/Conditions.jsx';
import About from './components/About.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <Welcome/>
      <Conditions />
      <About/>
    </div>
  );
}

export default App;
