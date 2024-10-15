import './App.css';
import Companies from './components/companies/Companies';
import ContactUs from './components/contact/ContactUs';
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
      <ContactUs/>
    </div>
  );
}

export default App;
