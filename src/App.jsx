import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}
