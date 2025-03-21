import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '../../../public/noimage.png'

function Cards({data,title}) {
  return (
    <div className='flex flex-wrap w-full p-5'>
      {data.map((data,i) => 
        <Link to={`/${data.media_type || title}/details/${data.id}`} className='relative w-[25vh] mr-[5%] mb-[5%]' key={i} >
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[40vh] object-cover' 
             src={data.backdrop_path || data.poster_path || data.profile_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path || data.profile_path}`: noimage}  />
            <h1 className='text-xl text-zinc-300 font-semibold'>{data.name || data.title || data.origial_name || data.original_title}</h1>
           
           {data.vote_average > 0 && 
           <div className='absolute right-[-10%] bottom-[25%] w-[5vh] h-[5vh] rounded-full bg-[#6556CD] text-white flex justify-center items-center'>
            {(data.vote_average*10).toFixed()}{"%"}
          </div>} 
        </Link>
      )}
    </div>
  )
}

export default Cards
