import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (
 

<header className="bg-white shadow-sm sticky top-0 z-50">        
  <div className="container mx-auto px-6 py-4">            
      <div className="flex justify-between items-center">                
        <div className="text-2xl font-bold text-primary">Moel Dash
        </div>                
        <nav className="hidden md:flex space-x-8">                   
        <a href="#about" className="hover:text-secondary">About</a>                    
        <a href="#skills" className="hover:text-secondary">Skills</a>                    
        <a href="#experience" className="hover:text-secondary">Experience</a>                    
        <a href="#education" className="hover:text-secondary">Education</a>                    
        <a href="#contact" className="hover:text-secondary">Contact</a>                
        </nav>                
        <button className="md:hidden focus:outline-none" id="menu-toggle">                    
            <i className="fas fa-bars text-xl"></i>                
        </button>            
      </div>            
      <div className="md:hidden hidden mt-4" id="mobile-menu">                
        <div className="flex flex-col space-y-3">                    
        <a href="#about" className="block hover:text-secondary">About</a>                    
        <a href="#skills" className="block hover:text-secondary">Skills</a>                    
        <a href="#experience" className="block hover:text-secondary">Experience</a>                    
        <a href="#education" className="block hover:text-secondary">Education</a>                    
        <a href="#contact" className="block hover:text-secondary">Contact</a>                
        </div>            
      </div>        
  </div>    
</header> 

    
  )}

export default App
