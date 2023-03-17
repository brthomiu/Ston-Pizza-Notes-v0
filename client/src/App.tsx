import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Page Style
import './App.css'
// Route imports
import Splash from './pages/Splash' 
import About from './pages/About'

function App() {

  return (

    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
        <Route path='/about' element={<About />} />
      </Routes>
      </Router>
    </div>

  )
}

export default App
