import React from "react";
import { Link } from 'react-router-dom'
import { BiSolidTv } from "react-icons/bi";
import { BiSolidMoviePlay } from "react-icons/bi";

function Header({data}) {

  return (
    <div className='w-full h-[50vh] flex flex-col justify-end items-start px-[4%] py-[2%]'
     style={{background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path})`,
             backgroundPosition: "top 5%",
             backgroundSize: "cover",
    }}>
      <h1 className='w-[70%] text-5xl font-black text-white'>{ data.name || data.title || data.origial_name || data.original_title}</h1>
      <p className='w-[70%] mt-3 text-white '>
        {data.overview.slice(0,220)}...
        <Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-500'> more</Link>
      </p>

      <div className='text-white mt-2 flex items-center'>
        <i className='text-yellow-500 ri-megaphone-fill mr-1'></i>{" "} {data.release_date || "No Information"}
        {data.media_type === 'tv' ? (
            <div className="flex items-center">
                <BiSolidTv className="text-yellow-500 ml-2" />
                <span className="text-white ml-1">TV</span>
            </div>
    ) : (
        <div className="flex items-center">
                <BiSolidMoviePlay className="text-yellow-500 ml-2" />
                <span className="text-white ml-1">MOVIE</span>
        </div>
    )}
      </div>

      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className='mt-3 bg-[#6556CD] p-2 rounded text-white'>Watch Trailer</Link>

    </div>
  )
}

export default Header
