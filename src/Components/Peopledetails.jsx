import React, { useEffect, useState } from 'react'
import { Link,useNavigate, useParams } from 'react-router-dom';
import  {useDispatch, useSelector}  from 'react-redux';
import { asyncloadperson, removeperson } from '../Store/Action/PersonActions';
import Loader from './Loader';
import Horizoncard from './Templates/Horizoncard';
import Dropdown from './Templates/Dropdown';

function Peopledetails() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {info} = useSelector(state => state.person)
    const dispatch = useDispatch();
    const [category, setcategory] = useState("movie");
  
    useEffect(() => {
       dispatch(asyncloadperson(id))
       return() => {
          dispatch(removeperson())
       }
    }, [id])
    
  return info ? (
    <div className='px-[5%] w-screen h-[160vh] '>

      <nav className='h-[10vh] w-full flex items-center text-zinc-100 text-xl '>
        <Link> <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i></Link>      
      </nav>

      <div className='w-full flex '>
          <div className='w-[20%] '>
            <img className='shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)] w-full h-[40vh] object-cover' src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}  />

            <hr className='mt-10 mb-5 border-none h-[1px] bg-zinc-300' />

            <div className='text-xl text-white flex gap-x-5'>
              <a target='_blank' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-line"></i></a>
              <a target='_blank' href={`https://www.facebook.com/${info.externalid.facebook_id}`}><i className="ri-facebook-circle-fill"></i></a>
              <a target='_blank' href={`https://www.instagram.com/${info.externalid.instagram_id}`}><i className="ri-instagram-fill"></i></a>
              <a target='_blank' href={`https://twitter.com/${info.externalid.twitter_id}`}><i className="ri-twitter-x-fill"></i></a>
            </div>

            <h1 className='text-2xl text-zinc-400 font-semibold my-4'>Personal Info</h1>

            <h1 className='text-lg text-zinc-400 '>Known For</h1>
            <h1 className='text-zinc-400 '>{info.detail.known_for_department}</h1>

            <h1 className='text-lg text-zinc-400 mt-3'>Gender</h1>
            <h1 className='text-zinc-400 '>{info.detail.gender === 2 ? "Male" : "Female"}</h1>

            <h1 className='text-lg text-zinc-400 mt-3'>Birthday</h1>
            <h1 className='text-zinc-400 '>{info.detail.birthday}</h1>

            <h1 className='text-lg text-zinc-400 mt-3'>Deathday</h1>
            <h1 className='text-zinc-400 '>{info.detail.deathday ? info.detail.deathday : "Still Alive"}</h1>

            <h1 className='text-lg text-zinc-400 mt-3'>Place of Birth</h1>
            <h1 className='text-zinc-400 '>{info.detail.place_of_birth}</h1>

            {info.detail.also_known_as.length > 0 && (
            <div>
              <h1 className='text-lg text-zinc-400 mt-3'>Also Known as</h1>
              <h1 className='text-zinc-400'>{info.detail.also_known_as.join(", ")}</h1>
            </div>
            )}
          </div>
    
      <div className='w-[80%] ml-[5%] '>
        <h1 className='text-5xl text-zinc-400 font-black mb-5'>{info.detail.name}</h1>

        <h1 className='text-xl font-semibold text-zinc-400 mb-2'>Biography</h1>
        <p className='text-zinc-400  '>{info.detail.biography}</p>

        <h1 className='text-xl mt-5 font-semibold text-zinc-400'>Known For</h1>
        <Horizoncard data={info.combinedcredits.cast} />

        <div className='w-full flex justify-between'>
          <h1 className='text-xl mt-5 font-semibold text-zinc-400'>Acting</h1> 
          <Dropdown title={category} option={["tv", "movie"]} func={(e) => setcategory(e.target.value)} />
        </div>

        <div className='list-disc text-zinc-400 w-full h-[45vh] mt-5 overflow-y-auto shadow-xl shadow-[rgba(255,255,255,.3)] border-2 border-zinc-700 p-5'>
            {info[category + "credits"].cast.map((c,i) => (
              <li key={i} className='hover:text-white p-5 rounded hover:bg-[#19191D] duration-300 cursor-pointer'>
                <Link to={`/${category}/details/${c.id}`}>
                  <span>
                  {c.name || c.title || c.origial_name || c.original_title}
                  </span>
                  <span className='block ml-5 mt-2'>{c.character && `Character Name: ${c.character}`}</span>
                </Link>
              </li>
            ))}
        </div>

      </div>
    </div>
    
  </div>
  ) : <Loader />
}

export default Peopledetails
