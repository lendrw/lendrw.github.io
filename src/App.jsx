import './App.css'
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
    </div>
  )
}

export default App;
