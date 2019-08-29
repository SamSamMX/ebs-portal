import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// IMPORTADOS PARA EL NAVBAR
import Nav from '../views/AppAppBar';
import About from '../../About';
import Contact from '../../Contact';
import SignIn from '../../SignIn';
import SignUp from '../../SignUp';

// IMPORTADOS PARA EL HOME
import ProductHero from '../views/home/ProductHero';
import ProductDefinition from '../views/home/ProductDefinition';
import ProductApplications from '../views/home/ProductApplications';
import ProductHowItWorks from '../views/home/ProductHowItWorks';
import ProductGetInTouch from '../views/home/ProductGetInTouch';
import ProductFAQ from '../views/home/ProductFAQ';

// IMPORTA VISTAS
import AppFooter from '../views/AppFooter';
import ForgotPassword from '../../ForgotPassword';
import Faq from '../../Faq';
import Privacy from '../../Privacy';
import Terms from '../../Terms';

// IMPORTA VISTAS PARA ABOUT
import AboutDefinition from '../views/about/aboutDefinition';
import AboutDomains from '../views/about/aboutDomains';

// IMPORTS TRANSLATIONS JSON
import eng from "../lang/english.json";
import spa from "../lang/spanish.json";

function MainContainer() {

  const [lang, setLang] = useState(eng);
  
  // EVENTO PARA CAMBIAR DE LENGUAJE  
    const changeLanguage = (lang) => {
      switch (lang) {
        case "sp":
            setLang(spa);
          break;
        case "en":
            setLang(eng);
          break;
        default:
          setLang(eng);
          break;
      }
    }

const Home = () => (
  <React.Fragment>
    <ProductHero lang={lang}/>
    <ProductDefinition lang={lang}/>
    <ProductApplications lang={lang}/>
    <ProductHowItWorks lang={lang}/>
    <ProductGetInTouch lang={lang}/>
    <ProductFAQ lang={lang}/>
    <AppFooter lang={lang} setLang={changeLanguage}/>
</React.Fragment>
);

  return (
    <Router>
      <div className="App">
        <Nav lang={lang} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={
              () => 
              <About 
                lang={lang} 
                definition={() => <AboutDefinition lang={lang} setLang={changeLanguage}/>}
                domains={() => <AboutDomains lang={lang} setLang={changeLanguage}/>}
                footer={() => <AppFooter lang={lang} setLang={changeLanguage}/>}
              />}/>
            <Route path="/contact" component={Contact} />
            <Route path="/sign-in" component={() => <SignIn lang={lang} setLang={changeLanguage}/>} />
            <Route path="/sign-up" component={() => <SignUp lang={lang} setLang={changeLanguage}/>} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/faq" component={Faq} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
          </Switch>
      </div>
    </Router>
  );
}

export default MainContainer;