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

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path='/markaz' element={<Markaz/>}/>
        <Route path='/xujjatlar' element={<MXujjatlar/>}/>
        <Route path='/faoliyat' element={<Faoliyat/>}/>
        <Route path='/tinglovchilar' element={<Tinglovchilar/>}/>
        <Route path='/yangiliklar' element={<News/>}/>
        <Route path='/aloqa' element={<Contact/>}/>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
