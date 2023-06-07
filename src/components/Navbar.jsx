import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className='black__gradient flex items-center justify-center sm:px-16 px-6 sm:py-6 py-4 fixed w-full z-10'>
      <h1 className="text-cyan-300 text-4xl font-poppins font-bold cursor-pointer"
      onClick={() => navigate("/")}
      >Movie App</h1>
    </div>
  )
}

export default Navbar