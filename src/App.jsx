import './app.css';

import Header from "./components/Header/Header";
import HeoSection from "./components/HeroSection/HeoSection";
import Company from "./components/company/Company";
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import GetStarted from './components/getStarted/GetStarted';
import Residency from './components/residencies/Residency';
import Value from './components/value/Value';

function App() {
  return (
    <div className="App">
      <div>
        <d  iv className="white-gradient"/>
        <Header />
        <HeoSection />
      </div>
      <Company />
      <Residency />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
