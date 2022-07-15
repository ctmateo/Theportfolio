import './sass/main.scss'
import './css/base_fonts/typography.css'


//Components
import Header from './components/Header';
import About from './components/About';
import Home from './components/Banner';
import Concept from './components/Concept';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Concept/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
