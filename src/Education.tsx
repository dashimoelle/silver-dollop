import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (
    <section id="education" className="py-16 bg-gray-50">        
    <div className="container mx-auto px-6">            
    <h2 className="text-3xl font-bold text-center mb-12">Education & Certifications
    </h2>                        
    <div className="max-w-4xl mx-auto">     
    <div className="mb-8 bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-start">                        
    <div className="bg-primary rounded-full p-3 mr-4">                            
        <i className="fas fa-graduation-cap text-white"></i>                        
    </div>                        
    <div>                            
        <h3 className="text-xl font-semibold">A.E.C. in Cybersecurity & Network Administration
        </h3>                            
        <p className="text-gray-600 mb-2">Bois-de-Boulogne College, Montreal, QC | 2019 – 2023
        </p>                            
        <p className="mb-2">Courses included:</p>                            
        <ul className="list-disc pl-5 space-y-1">                                
            <li>Cyber Defense</li>                               
            <li>Network Architecture</li>                                
            <li>Database & Distributed Systems Security</li>                                <li>Cryptography</li>                               
            <li>Ethical Hacking</li>                                
            <li>Incident Response</li>                            
        </ul>                        
    </div>                    
    </div>                
    </div>      


    <div className="mb-8 bg-white p-6 rounded-lg shadow">                    
    <div className="flex items-start">                        
    <div className="bg-primary rounded-full p-3 mr-4">                            
        <i className="fas fa-graduation-cap text-white"></i>                        
    </div>                        
    <div>                            
    <h3 className="text-xl font-semibold">A.E.C. in Business Launch & Management
    </h3>                            
        <p className="text-gray-600 mb-2">Multicultural Academy Canada, Montreal, QC | 2016 – 2017
        </p>                            
        <ul className="list-disc pl-5 space-y-1">                                
            <li>Focused on entrepreneurial principles, business planning, and management practices
            </li>                                
            <li>Market analysis and financial planning</li>                                <li>Business law and regulations</li>                            
        </ul>                        
    </div>                    
    </div>                
    </div>          


    <div className="mb-8 bg-white p-6 rounded-lg shadow">                    
        <div className="flex items-start">                        
            <div className="bg-primary rounded-full p-3 mr-4">                            
                <i className="fas fa-graduation-cap text-white"></i>                        
            </div>                       
            <div>                            
            <h3 className="text-xl font-semibold">A.E.C. in Advanced Chemical Analysis
            </h3>                            
            <p className="text-gray-600 mb-2">Université du Québec à Montréal (UQAM), Montreal, QC | 2013 – 2016</p>                            
            <ul className="list-disc pl-5 space-y-1">                                
                <li>Training in high-tech laboratory techniques for industrial and research environments</li>                                
                <li>Analytical instrumentation</li>                                
                <li>Quality control procedures</li>                            
            </ul>                        
        </div>                    
    </div>                
</div>           


<div className="mb-8 bg-white p-6 rounded-lg shadow">                    
<div className="flex items-start">                        
<div className="bg-primary rounded-full p-3 mr-4">                            
<i className="fas fa-graduation-cap text-white"></i>                        
</div>                        
<div>                            
<h3 className="text-xl font-semibold">Minor Program in Organic Chemistry (Pre-Master's Preparation)
</h3>                            
<p className="text-gray-600 mb-2">Université de Montréal (UdeM), Montreal, QC | 2013 – 2016
</p>                           
<ul className="list-disc pl-5 space-y-1">                                
    <li>Specialized coursework in organic chemistry and lab technologies
    </li>                                
    <li>Synthesis and characterization of organic compounds</li>                                <li>Spectroscopic analysis techniques</li>                            
</ul>                        
</div>                    
</div>                
</div>         

<div className="bg-white p-6 rounded-lg shadow">                    
<h3 className="text-xl font-semibold mb-4">Certifications</h3>                    
<div className="grid md:grid-cols-2 gap-4">                        
<div className="flex items-start">                            
    <div className="bg-primary rounded-full p-2 mr-3 mt-1">                                
        <i className="fas fa-certificate text-white"></i>                            
</div>                            
<div>                                
<h4 className="font-medium">Cisco CCNA 1-4</h4>                                
<p className="text-gray-600 text-sm">2020 – 2021</p>                            
</div>                        
</div>                        
<div className="flex items-start">                            
    <div className="bg-primary rounded-full p-2 mr-3 mt-1">                                
        <i className="fas fa-certificate text-white"></i>                            
</div>                            
<div>                                
    <h4 className="font-medium">eJPT (eLearnSecurity Junior Penetration Tester)
    </h4>                                
<p className="text-gray-600 text-sm">In Progress</p>                            
</div>                        
</div>                        
<div className="flex items-start">                          
    <div className="bg-primary rounded-full p-2 mr-3 mt-1">                                
<i className="fas fa-certificate text-white"></i>                            
</div>                            
<div>                                
    <h4 className="font-medium">CompTIA Security+</h4>                                
    <p className="text-gray-600 text-sm">Planned</p>                            
</div>                        
</div>                        
<div className="flex items-start">                            
    <div className="bg-primary rounded-full p-2 mr-3 mt-1">                                
        <i className="fas fa-certificate text-white"></i>                            
    </div>                            
    <div>                                
        <h4 className="font-medium">AWS Certified Security - Specialty
        </h4>                                
        <p className="text-gray-600 text-sm">Planned</p>                            
    </div>                        
</div>                    
</div>                
</div>            
</div>        
</div>    
</section>   


    
  )}

export default App
