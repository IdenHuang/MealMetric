import './App.css'
import { HashRouter as Router, Routes, Route } from "react-router-dom"
import { Calendar } from './pages/calendar'
import { Home } from './pages/home'
import { Recipes } from './pages/recipes'
import { Navbar } from './components/Navbar'
import { Layout } from './components/Layout'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/recipes" element={<Recipes/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
