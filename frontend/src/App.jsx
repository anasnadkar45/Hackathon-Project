import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/common/Navbar'

function App() {

  return (
    <div className="w-screen min-h-screen bg-background flex flex-col font-mono relative">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App
