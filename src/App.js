import './App.css';
import Header from './components/header.js';
import Footer from './components/footer.js'
import Fpage from './components/first-page.js';
import Spage from './components/second-page.js'
import Tpage from './components/third-page.js'
import Fopage from './components/fourth-page.js'
import Sipage from './components/sixth-page.js'
import Sepage from './components/seventh-page.js';
import Fipage from './components/fifth-page';
import { render } from '@testing-library/react';

function App() {
  return (
    <div className="App">
      <Header />
      <Fpage id="firstpage"/>
      <Spage id="secondpage"/>
      <Tpage id="thirdpage"/>
      <Fopage id="fourthpage"/>
      <Fipage id="fifthpage" />
      <Sipage id="sixthpage"/>
      <Sepage id="seventhpage"/>
      <Footer/>
    </div>
  )
}

export default App;
