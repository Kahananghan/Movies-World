import React from 'react'
import notrailer from '../../public/404.gif'

function NotFound() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black'>
      <img className='w-[30%] h-[30%] object-cover' src={notrailer}  />
    </div>
  )
}

export default NotFound
