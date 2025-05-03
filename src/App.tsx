import './App.css'
import { About, Contact, Home, Projects, Skills } from './pages'
import Navbar from './shared/components/navbar/Navbar'
import { AppThemeProvider } from './shared/contexts'

function App() {

  return (
    <AppThemeProvider>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </AppThemeProvider>
  )
}

export default App
