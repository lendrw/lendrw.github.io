import './App.css';

import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';

import StarrySky from './components/StarrySky/StarrySky';

function App() {

  return (
        <div className='App'>
            <Navbar/>
            <StarrySky/>
            <Home/>
            <About/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
  )
}

export default App;
