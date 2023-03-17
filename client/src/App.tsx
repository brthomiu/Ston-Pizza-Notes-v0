import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Page Style
import './App.css'
// Route imports
import Splash from './pages/Splash' 

function App() {

  return (

    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Splash />} />
      </Routes>
      </Router>
    </div>

  )
}

export default App
