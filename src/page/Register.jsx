import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
   return (
      <div className='text-white'>Register
         <div className="flex flex-col items-center gap-4 min-h-screen absolute top-0 w-full justify-center">
            <h1 className="text-2xl font-bold text-gray-800">Корзина</h1>
            <p className="text-gray-600">Здесь пока пусто...</p>
            <button className="px-4 py-2 bg-[#C99E71] text-white rounded-lg transition-transform duration-700 ease-out hover:scale-110"
            >
               <Link to={'/'}>Назад</Link>
            </button>
         </div>
      </div>
   )
}

export default Register