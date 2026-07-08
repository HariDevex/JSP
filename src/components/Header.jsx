import React from 'react'
import { Link } from 'react-router-dom'
import { socialLinks } from '../constants'

const Header = () => {
  return (
    // Decreased vertical padding (p-2 instead of p-4/p-3) for reduced height
    <header className='bg-gray-800 text-white p-2 shadow-lg border-b border-indigo-500'>
      
      {/* Container remains flex and centered */}
      <div className='flex gap-3 justify-center items-center'>
        {socialLinks.map((link) => (
          
          <Link 
            key={link.name} 
            to={link.link} 
            target='_blank' 
            // Reduced padding (p-1.5) on the icon container for a smaller hit area
            className='p-1.5 rounded-full border-2 border-transparent transition duration-300 ease-in-out 
                       hover:bg-indigo-600 hover:border-white hover:shadow-md transform hover:scale-110'
          >
            <img
              src={link.iconURL}
              alt={link.name}
              // Reduced icon size from w-7/w-6 to w-5 h-5
              className='w-5 h-5 object-contain'
            />
          </Link>
        ))}
      </div>
    </header>
  )
}

export default Header