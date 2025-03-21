import React from 'react'
import { Link } from 'react-router-dom'
import { BsFire } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { BiSolidTv } from "react-icons/bi";
import { IoMdPeople } from "react-icons/io";
import { RiMovie2AiFill } from "react-icons/ri";
import { RiInformationFill } from "react-icons/ri";
import { IoMdCall } from "react-icons/io";
function Sidenav() {
  return (
    <div className='w-[20%] h-screen border-r-2 border-zinc-400 p-3 '>
       <h1 className='text-2xl font-bold text-white'>
        <i className="text-[#6556CD] ri-movie-fill mr-2"></i>
        <span>MOVIES WORLD</span>
       </h1>

       <nav className='text-zinc-400 flex flex-col text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>New Feeds</h1>
        <Link to={"/trending"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><BsFire /> Trending</Link>
        <Link to={"/popular"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><FaStar/> Popular</Link>
        <Link to={"/tvshows"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><BiSolidTv/> Tv Shows</Link>
        <Link to={"/movies"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><RiMovie2AiFill/> Movies</Link>
        <Link to={"/people"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><IoMdPeople/> People</Link>
       </nav>

       <hr className='border-none h-[1px] bg-zinc-400 mt-5' />

       <nav className='text-zinc-400 flex flex-col text-xl gap-3'>
        <h1 className='text-white font-semibold text-xl mt-10 mb-5'>Website Information</h1>
        <Link to={"/about"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><RiInformationFill/> About</Link>
        <Link to={"/contact"} className='hover:bg-[#6556CD] hover:text-white rounded-lg p-4 duration-400 flex items-center gap-2'><IoMdCall/> Contact Us</Link>
       </nav>
       
    </div>
  )
}

export default Sidenav
