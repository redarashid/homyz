import './App.css';
import Companies from './components/companies/Companies';
import ContactUs from './components/contact/ContactUs';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Information from './components/information/Information';
import Value from './components/our-Value/Value';
import Residencies from './components/residencies/Residencies';
import Started from './components/started/Started';

function App() {
  return (
    <div className='App'>
      <div>
        <div className='white-gradient'/>
        <section id='Header'>
          <Header/>
        </section>

        <section id='Hero'>
          <Hero/>
        </section>

      </div>
      <section id='Companies'>
        <Companies/>
      </section>

      <section id='Residencies'>
        <Residencies/>
      </section>

      <section id='Value'>
        <Value/>
      </section>

      <section id='ContactUs'>
        <ContactUs/>
      </section>

      <section id='Started'>
        <Started/>
      </section>

      <section id='Information'>
        <Information/>
      </section>
    </div>
  );
}

export default App;
