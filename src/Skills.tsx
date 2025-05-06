import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (
       
    <section id="skills" className="py-16 bg-gray-50">        
    <div className="container mx-auto px-6">            
    <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>                        
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">    
   

    <div className="bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-center mb-4">                        
    <div className="bg-primary p-3 rounded-full mr-4">                            
        <i className="fas fa-code text-white"></i>                        
    </div>                        
        <h3 className="text-xl font-semibold">Programming Languages</h3>                   
    </div>                    
    <div className="flex flex-wrap gap-2">                        
        <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Python
        </span>                        
        <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Java
        </span>                        
        <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">SQL
        </span>                        
        <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">C
        </span>                        
         <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">C++
        </span>                        
        <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Go
        </span>                        
        <span className="skill-badge bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Rust
        </span>                    
    </div>                
    </div>  



        <div className="bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-center mb-4">                        
    <div className="bg-primary p-3 rounded-full mr-4">                            
        <i className="fas fa-terminal text-white"></i>                        
    </div>                        
        <h3 className="text-xl font-semibold">Scripting & System</h3>                    
    </div>                   
    <div className="flex flex-wrap gap-2">                        
        <span className="skill-badge bg-green-100 text-green-800 px-3 py-1 rounded-full">PowerShell
        </span>                       
        <span className="skill-badge bg-green-100 text-green-800 px-3 py-1 rounded-full">Bash
        </span>                        
        <span className="skill-badge bg-green-100 text-green-800 px-3 py-1 rounded-full">x86 Assembly
        </span>                        
        <span className="skill-badge bg-green-100 text-green-800 px-3 py-1 rounded-full">YAML
        </span>                        
        <span className="skill-badge bg-green-100 text-green-800 px-3 py-1 rounded-full">JSON
        </span>                    
    </div>               
    </div>            





         <div className="bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-center mb-4">                        
    <div className="bg-primary p-3 rounded-full mr-4">                            
        <i className="fas fa-globe text-white"></i>                        
    </div>                        
        <h3 className="text-xl font-semibold">Web Technologies</h3>                    
    </div>                   
    <div className="flex flex-wrap gap-2">                        
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">HTML
        </span>                        
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">CSS
        </span>                        
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">PHP
        </span>                        
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">JavaScript
        </span>                        
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">React
        </span>                       
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Node.js
        </span>                        
        <span className="skill-badge bg-purple-100 text-purple-800 px-3 py-1 rounded-full">Django
        </span>                    
    </div>                
    </div>           




          <div className="bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-center mb-4">                        
        <div className="bg-primary p-3 rounded-full mr-4">                            
            <i className="fas fa-desktop text-white"></i>                        
        </div>                       
            <h3 className="text-xl font-semibold">Operating Systems</h3>                    
    </div>                    
    <div className="flex flex-wrap gap-2">                        
    <span className="skill-badge bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Windows
    </span>                        
    <span className="skill-badge bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Linux
    </span>                       
    <span className="skill-badge bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">macOS
    </span>                        
    <span className="skill-badge bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">Android
    </span>                    
    </div>                
    </div>           


              <div className="bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-center mb-4">                        
    <div className="bg-primary p-3 rounded-full mr-4">                            
    <i className="fas fa-shield-alt text-white"></i>                        
    </div>                        
    <h3 className="text-xl font-semibold">Cybersecurity Tools</h3>                    
    </div>                    
    <div className="flex flex-wrap gap-2">                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Kali Linux
    </span>                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Wireshark
    </span>                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">OWASP
    </span>                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Burp Suite
    </span>                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Metasploit
    </span>                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Nmap
    </span>                       
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Snort
    </span>                        
    <span className="skill-badge bg-red-100 text-red-800 px-3 py-1 rounded-full">Splunk
    </span>                    
    </div>                
    </div>    


        <div className="bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-center mb-4">                        
    <div className="bg-primary p-3 rounded-full mr-4">                            
        <i className="fas fa-server text-white"></i>                        
    </div>                        
    <h3 className="text-xl font-semibold">Infrastructure & Cloud</h3>                    
    </div>                    
    <div className="flex flex-wrap gap-2">                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Network Management
        </span>                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Server Administration
        </span>                       
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">AWS
        </span>                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Azure
        </span>                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Google Cloud
        </span>                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Docker
        </span>                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Kubernetes
        </span>                        
        <span className="skill-badge bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full">Terraform
        </span>                    
        </div>                
        </div>            
        </div>        
        </div>    
    </section>        



    
  )}

export default App
