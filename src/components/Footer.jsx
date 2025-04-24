import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-[100px] flex items-center justify-center px-4'>   {/*fixed bottom-0 left-0 right-0*/}
 
      <div className='flex items-center gap-4'>
        <span className='flex items-center'>
          <input type="email" className='text-[12px] bg-black w-[200px] rounded-[35px] px-5 py-2 h-[40px]' placeholder='Enter your Email...' />
          <svg onClick={() => navigate('/register')} className="w-[70px] h-[70px] relative right-12" width='120px' height='70px' viewBox="35 0 100 92" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_1_294)">
              <circle cx="68" cy="46" r="24" fill="#C99E71" />
            </g>
            <path d="M60.9999 46H74.9999" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M68 39L75 46L68 53" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </span>
        <p className='text-[9px] text-[#C99E71] relative right-17'>Cofee shop © 2025.</p>
      </div>
    </div>
  )
}

export default Footer
