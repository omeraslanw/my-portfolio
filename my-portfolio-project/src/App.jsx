import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import AboutMe from './components/AboutMe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen">
      <Navbar />
      <Footer />
      <Projects />
      <Skills />
      <AboutMe />
    </div>
  )
}

export default App;
