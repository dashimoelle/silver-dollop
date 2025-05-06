import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (
    <section id="about" className="py-16 bg-white">        
    <div className="container mx-auto px-6">            
        <h2 className="text-3xl font-bold text-center mb-12">Professional Summary</h2>            
    <div className="max-w-4xl mx-auto">                
    <p className="text-lg mb-6">Detail-oriented and curious graduate in Information Security, with strong foundational knowledge in Cybersecurity architecture, network security, and Cybersecurity tools. Highly motivated to apply theoretical knowledge in real-world scenarios and continuously develop technical and professional skills in the cybersecurity field.</p>                
    <div className="grid md:grid-cols-2 gap-8 mt-8">                    
    <div>                        
        <h3 className="text-xl font-semibold mb-4 text-secondary">Core Competencies
        </h3>                        
    <ul className="space-y-3">                            
        <li className="flex items-start">                                
            <i className="fas fa-check-circle text-primary mt-1 mr-2">
            </i>                                
            <span>Known for honesty, integrity, and professionalism
            </span>                            
        </li>                            
        <li className="flex items-start">                                
            <i className="fas fa-check-circle text-primary mt-1 mr-2">
            </i>                                
            <span>Calm, organized, and effective under pressure</span>                            
        </li>                            
        <li className="flex items-start">                               
            <i className="fas fa-check-circle text-primary mt-1 mr-2">
            </i>                                
            <span>Strong team player with results-driven mindset</span>                            
        </li>                            
        <li className="flex items-start">                               
            <i className="fas fa-check-circle text-primary mt-1 mr-2">
            </i>                                
            <span>Bilingual: Excellent communication skills in French and English (written and spoken)</span>                            
        </li>
    </ul>                    
    </div>                    
    <div>                        
        <h3 className="text-xl font-semibold mb-4 text-secondary">Career Focus
        </h3>                        
            <ul className="space-y-3">                            
                <li className="flex items-start">                                
                    <i className="fas fa-bullseye text-primary mt-1 mr-2">
                    </i>                                
                    <span>Cybersecurity architecture and implementation
                    </span>                            
                </li>                            
                <li className="flex items-start">                                
                    <i className="fas fa-bullseye text-primary mt-1 mr-2">
                    </i>                                
                    <span>Network security and vulnerability assessment
                    </span>                            
                </li>                            
                <li className="flex items-start">                                
                    <i className="fas fa-bullseye text-primary mt-1 mr-2">
                    </i>                                
                    <span>Penetration testing and ethical hacking
                    </span>                            
                </li>                            
                <li className="flex items-start">                                
                    <i className="fas fa-bullseye text-primary mt-1 mr-2">
                    </i>                                
                    <span>Secure system administration and cloud security
                    </span>                            
                </li>                        
            </ul>                    
    </div>                
    </div>            
    </div>        
    </div>    
    </section>  
    
  )}

export default App
