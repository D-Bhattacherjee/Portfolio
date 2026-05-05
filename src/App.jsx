
import './App.css'
import About from './components/about'
import Hero from './components/hero'
import Projects from './components/project'
import Skills from './components/skills'
function App() {

  return (
    <>
      <Hero />
      <hr style={{ border: '1px solid white', width: '75%', margin: '20px auto' }} />
      <About />

      <Skills />
      <hr style={{ border: '1px solid white', width: '75%', margin: '20px auto' }} />

      <Projects />
    </>
  )
}

export default App
