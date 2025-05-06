
import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (



<section className="gradient-bg text-white py-20">        
<div className="container mx-auto px-6 flex flex-col md:flex-row items-center">            
    <div className="md:w-1/2 mb-10 md:mb-0">                
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Moel Dash</h1>               
    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Cybersecurity & Network Security Professional</h2>                
    <p className="text-lg mb-8">Detail-oriented cybersecurity specialist with expertise in network security, penetration testing, and secure system architecture.</p>                
    <div className="flex space-x-4">                    
        <a href="#contact" className="bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">Contact Me</a>                    
        <a href="#skills" className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">View Skills</a>               
    </div>            
</div>            
<div className="md:w-1/2 flex justify-center">                
    <div className="bg-black rounded-full p-2 shadow-xl w-64 h-64 flex items-center justify-center">                    
        <img src="/vite.jpg" alt="Profile" className="bg-white rounded-full p-2 shadow-xl w-64 h-64 flex items-center justify-center object-cover"/>               
        <i className="fas fa-user-shield bg-green, text-8xl "></i> 

    </div>            
</div>        
</div>    
</section>   


  )}

export default App
