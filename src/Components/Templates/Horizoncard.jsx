import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '../../../public/noimage.png'

function Horizoncard({data}) {
  return (
      <div className='w-full h-[45vh] p-5 flex overflow-y-hidden'>
        {data.length > 0 ? data.map((data,index) => 
            <Link to={`/${data.media_type}/details/${data.id}`} key={index} className='min-w-[20%] bg-zinc-900 mr-5 mb-5'>
                <img className='w-full h-[50%] object-cover' 
                 src={data.backdrop_path || data.poster_path ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.poster_path}` : noimage} />
                <div className='text-white p-3 h-[50%] overflow-y-auto'>
                    <h1 className='mt-2 mb-2 text-lg font-semibold'>{ data.name || data.title || data.origial_name || data.original_title}</h1>
                    <p>
                        {data.overview.slice(0,60)}...
                    <span className='text-zinc-400'> more</span>
                    </p>
                </div>
            </Link>
        ): <h1 className='text-xl text-white font-black text-center mt-5'>Nothing to Show</h1>
    }
      </div>
  )
}

export default Horizoncard






