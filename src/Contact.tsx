import { useState } from 'react'

import './App.css'

function App() {
  const [] = useState(0)

  return (
<section id="contact" className="py-16 bg-gray-50">        
<div className="container mx-auto px-6">            
    <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>                        
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">                
        <div>                    
            <h3 className="text-xl font-semibold mb-4">Send a Direct Message</h3>                    
            <p className="mb-6">Interested in working together or have questions about my services? Send me a secure message and I'll get back to you as soon as possible.
            </p>                                        
            <form action="https://formsubmit.co/dashmoel@gmail.com" method="POST" id="contactForm"  className="contact-form">                        
                <div className="mb-4">                            
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name
                    </label>                            
                    <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" required/>                        
                </div>                        
                <div className="mb-4">                            
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email
                    </label>                            
                    <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" required/>                      
                </div>                        
                <div className="mb-4">                            
                    <label htmlFor="subject" className="block text-gray-700 mb-2">Subject
                    </label>                            
                    <input type="text" id="subject" name="subject" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" required/>                      
                </div>                       
                <div className="mb-4">                           
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message
                    </label>                            
                    <textarea id="message" name="message" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary" required></textarea>                        
                </div>                        
                <div className="mb-4">                            
                    <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY">
                    </div>                        
                </div>                        
                <button type="submit" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition w-full">                            Send Message 
                    <i className="fas fa-paper-plane ml-2"></i>                     
                </button>  
                <input type="hidden" name="_template" value="table"/>               
            </form>
        </div>                                
        <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>                  
            <div className="space-y-4">                        
                <div className="flex items-start">                            
                    <div className="bg-primary rounded-full p-3 mr-4">                                
                        <i className="fas fa-envelope text-white"></i>                            
                    </div>                            
                    <div>                                
                        <h4 className="font-medium">Email</h4>                                
                        <p className="text-gray-600">Send a direct message here</p>                            
                    </div>                        
                </div>                        
                <div className="flex items-start">                            
                    <div className="bg-primary rounded-full p-3 mr-4">                                
                        <i className="fas fa-map-marker-alt text-white"></i>                            
                    </div>                            
                    <div>                                
                        <h4 className="font-medium">Location</h4>                                
                        <p className="text-gray-600">QC, Canada</p>                            
                    </div>                        
                </div>                        
                <div className="flex items-start">                            
                    <div className="bg-primary rounded-full p-3 mr-4">                                
                        <i className="fas fa-globe text-white"></i>                            
                    </div>                            
                    <div>                                
                        <h4 className="font-medium">Languages</h4>                                
                        <p className="text-gray-600">English (Fluent), French (Fluent), and more!</p>                            
                    </div>                        
                </div>                    
            </div>                                        
            
        </div>  
    </div> 
</div> 
</section>        

  )}

export default App
