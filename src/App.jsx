import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';

import StarrySky from './components/StarrySky/StarrySky';

function App() {

  return (
    <BrowserRouter>
        <div className='App'>
            <Navbar/>
            <StarrySky/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/projects' element={<Projects/>}/>
              <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    </BrowserRouter>
  )
}

export default App;
