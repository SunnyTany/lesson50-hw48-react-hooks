import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/use-useMatch/Navigation'
import Home from './components/pages/Home'
import Memo from './components/pages/Memo'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memo" element={<Memo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
