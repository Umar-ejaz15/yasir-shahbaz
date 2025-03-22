import React from 'react'
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const Cta = () => {
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6">
          Let's Talk About Your Next Project
        </h2>
        <p className="text-lg md:text-xl text-gray-300 text-center mb-8">
          Have an idea? Let's bring it to life together.
        </p>
        
        <div className="flex gap-4 sm:gap-6">
         
          <a href="https://calendly.com/workwithyasir13/30min" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
            Book a Call
          </a>
        </div>

        <div className="w-full flex justify-between items-center mt-16">
          <p className="text-sm text-gray-500">© 2024 All rights reserved</p>
          <div className="flex gap-3 sm:gap-5">
            
            <a href="https://linkedin.com/in/yasir-ali-dev" target="_blank" rel="noopener noreferrer">
              <BsLinkedin className="text-lg hover:text-blue-500 cursor-pointer transition-colors" />
            </a>
            <a href="https://github.com/yasirali-dev" target="_blank" rel="noopener noreferrer">
              <BsGithub className="text-lg hover:text-gray-500 cursor-pointer transition-colors" />
            </a>
            <a href="mailto:workwithyasir13@gmail.com">
              <MdEmail className="text-lg hover:text-yellow-500 cursor-pointer transition-colors" />
            </a>          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta