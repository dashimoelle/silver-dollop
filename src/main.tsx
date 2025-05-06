import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import About from './About.tsx'
import Hero from './Hero.tsx'
import Skills from './Skills.tsx'
import Experience from './Experience.tsx'
import Education from './Education.tsx'
import Contact from './Contact.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App /> 
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Education />
    <Contact />
  </StrictMode>,
)
