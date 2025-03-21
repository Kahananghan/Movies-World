import React from 'react'
import loader from '../../public/Loader.gif'

function Loader() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-[#000C13]'>
      <img className='w-[50%] h-[50%]  object-cover' src={loader}  />
    </div>
    
  )
}

export default Loader
