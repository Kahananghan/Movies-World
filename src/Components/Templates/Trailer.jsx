import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound';

function Trailer() {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie": "tv";
    const yttrailer = useSelector((state) => state[category].info.videos);

  return (
    <div className='absolute z-[100] top-0 left-0 bg-[rgba(0,0,0,.8)] w-screen h-screen flex justify-center items-center'>
      
      { yttrailer ? 
      (<ReactPlayer controls height={640} width={1260}
      url={`https://www.youtube.com/watch?v=${yttrailer.key}`} 
      />) : (<NotFound/>)
      }  
      <Link>
      <i onClick={() => navigate(-1)} className="absolute top-[5%] right-[5%] hover:text-[#6556CD] ri-close-fill text-4xl text-white"></i>
      </Link>
    </div>
  )
}

export default Trailer
