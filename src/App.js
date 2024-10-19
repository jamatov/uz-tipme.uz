import './App.scss';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.jsx'
import Markaz from './pages/Markaz.jsx'
import MXujjatlar from './pages/MXujjatlar.jsx'
import Faoliyat from './pages/Faoliyat.jsx'
import Tinglovchilar from './pages/Tinglovchilar.jsx'
import News from './pages/News.jsx'
import Contact from './pages/Contact';
import Footer from './components/Footer.jsx';
import Dasturlar from './pages/meyoriyxujjatlar/dasturlar.js';
import Prezidentfarmonlari from './pages/kafedra/prezidentfarmonlari.js';

import { useLocation } from "react-router-dom";

import i18next from "i18next";
import i18n from "i18next";

import { initReactI18next } from "react-i18next";
import translationUz from "./locale/uz";
import translationRu from "./locale/ru";
import translationEn from "./locale/en";
import translationOz from "./locale/oz";


i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRu },
    uz: { translation: translationUz },
    en: { translation: translationEn },
    oz: { translation: translationOz },

  },
  lng: "uz",
  fallbackLng: "uz",
});


function App() {

  const { pathname } = useLocation();
  const changeLang = (value) => {
    i18next.changeLanguage(value);
  };

  return (
    <div className="App">
      <Navbar changeLang={changeLang}/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/markaz' element={<Markaz/>}/>
        <Route path='/xujjatlar' element={<MXujjatlar/>}/>
        <Route path='/faoliyat' element={<Faoliyat/>}/>
        <Route path='/tinglovchilar' element={<Tinglovchilar/>}/>
        <Route path='/yangiliklar' element={<News/>}/>
        <Route path='/aloqa' element={<Contact/>}/>
        <Route path='/meyoriyxujjatlar/dasturlar' element={<Dasturlar/>}/>
        <Route path='/meyoriyxujjatlar/prezidentfarmonlari' element={<Prezidentfarmonlari/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
