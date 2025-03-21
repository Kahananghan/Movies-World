import React, { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import  {useDispatch, useSelector}  from 'react-redux';
import { asyncloadtv, removetv } from '../Store/Action/TvActions';
import Loader from './Loader';
import Horizoncard from './Templates/Horizoncard';

function Tvshowdetails() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {id} = useParams();
  const {info} = useSelector(state => state.tv)
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(asyncloadtv(id))
     return() => {
        dispatch(removetv())
     }
  }, [id])
  
  return info ? (
    <div style={{background:`linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5),rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
                backgroundPosition: "center",
                backgroundSize: "cover", 
              }}
        className='relative w-full h-[190vh] px-[10%]'>

      <nav className='h-[10vh] w-full flex items-center text-zinc-100 text-xl gap-8'>
        <Link> <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line"></i></Link>
        <a target='_blanck' href={info.detail.homepage}><i className="ri-earth-line"></i></a>
        <a target='_blanck' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-external-link-line"></i></a>
        <a target='_blanck' href={`https://www.imdb.com/title/${info.externalid.imdb_id}`}>imdb</a>
      </nav>
      
      <div className='w-full flex'>
        <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] h-[50vh] object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}  />
        
        <div className=' ml-[5%] text-white'>
          <h1 className='text-5xl text-white font-black'>
            {info.detail.name || info.detail.title || info.detail.origial_name || info.detail.original_title}
            <small className='text-2xl text-zinc-200 font-bold '>({info.detail.first_air_date.split("-")[0]})</small>
          </h1>

          <div className=' flex gap-x-5 items-center mt-3 mb-3'>
            <div className=' w-[5vh] h-[5vh] rounded-full bg-[#6556CD] text-white flex justify-center items-center' >
            {(info.detail.vote_average*10).toFixed()}{"%"}
            </div>
            <h1>{info.detail.first_air_date}</h1>
            <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
          </div>

          <h1 className='text-xl font-semibold italic text-zinc-100 mb-3'>{info.detail.tagline}</h1>

          <h1 className='text-xl  font-semibold'>Overview</h1>
          <p className='text-sm'>{info.detail.overview}</p>

          <h1 className='text-xl  font-semibold mt-3'>Tv Translated</h1>
          <p className='text-sm mb-7'>{(info?.translations ?? []).join(", ")}</p>

          <Link className=' px-5 py-3 rounded-lg bg-[#6556CD]' to={`${pathname}/trailer`}>
           <i className='ri-play-fill mr-1 text-xl'></i>Play Trailer
          </Link>
        </div>

      </div>
      

      <div className='w-[80%] flex flex-col gap-y-5 mt-5'>
        {info.watchproviders && info.watchproviders.flatrate && 
        <div className='flex gap-x-5 items-center text-white'>
          <h1>Available on Platforms</h1>
          {info.watchproviders.flatrate.map((w,i) =>   
            <img key={i} title={w.provider_name} className='w-[7vh] h-[7vh] rounded-md object-cover ' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} />)}
        </div>
      }
       {info.watchproviders && info.watchproviders.rent && 
        <div className='flex gap-x-5 items-center text-white'>
          <h1>Available on Rent</h1>
          {info.watchproviders.rent.map((w,i) =>   
            <img key={i} title={w.provider_name} className='w-[7vh] h-[7vh] rounded-md object-cover ' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} />)}
        </div>
      }
       {info.watchproviders && info.watchproviders.buy && 
        <div className='flex gap-x-5 items-center text-white'>
          <h1>Available to Buy</h1>
          {info.watchproviders.buy.map((w,i) =>   
            <img key={i} title={w.provider_name} className='w-[7vh] h-[7vh] rounded-md object-cover ' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} />)}
        </div>
      }
      </div>

      <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-300' />
      <h1 className='text-white text-2xl font-bold mt-5'>Seasons</h1>
      <div className='w-[100%] flex overflow-y-hidden mb-5 p-5'>
        {info.detail.seasons.length > 0 ? info.detail.seasons.map((s,i) => (
          <div key={i} className='mr-[10%] w-[15vh] '>
           <img  className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] min-w-[14vw] h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${s.poster_path}`}  />
           <h1 className='text-2xl text-white font-semibold'>{s.name}</h1>
          </div>
        )):<h1 className='text-xl text-white font-black text-center mt-5'>Nothing to Show</h1>
        }
      </div>

      <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-300' />
      <h1 className='text-white text-2xl font-bold mt-5'>Recommendations & Similar</h1>
      <Horizoncard data={
        info.recommendations.length > 0 ? info.recommendations : info.similar 
      } />

      <Outlet/>

  </div>
  ): ( <Loader/>)
}

export default Tvshowdetails
