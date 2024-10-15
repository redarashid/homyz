import './App.css';
import Companies from './components/companies/Companies';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Value from './components/our-Value/Value';
import Residencies from './components/residencies/Residencies';

function App() {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'/>
        <Header/>
        <Hero/>
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
    </div>
  );
}

export default App;
