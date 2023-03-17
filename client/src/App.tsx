import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Page Style
import './App.css'
// Page/Component imports
import Navigation from './components/Navigation'
import Splash from './pages/Splash' 
import About from './pages/About'

function App() {

  return (

    <div className="App">
      <Router>
        <Navigation />
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </Router>
    </div>

  )
}

export default App
