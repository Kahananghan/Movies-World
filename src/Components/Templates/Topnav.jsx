import React, { useEffect,useState } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import noimage from '../../../public/noimage.png'

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);

  const getsearches = async () => {
    try {
        const {data} = await axios.get("/search/multi", {  // `/search/multi/query=${query}`
          params: { query} //dynamic
      });      
      setsearches(data.results); 
      // console.log(data.results); 
       
    } catch (error) {
        console.log("error:" , error);
    }
  }

useEffect(() =>{
    getsearches();
},[query])

  return (
    <div className='w-full h-[10vh] relative flex justify-start items-center ml-[15%]'>
      <i className="text-3xl text-zinc-400 ri-search-line"></i>
      <input 
        onChange={(e) => setquery(e.target.value)}
        value={query}
        className=' l-[30%] w-[50%] text-zinc-200 p-3 mx-5 text-xl bg-transparent ' 
        type="text" 
        placeholder='Search' 
      />
        {query.length > 0 && (
            <i onClick={() => setquery("")} className="hover:text-[#6556CD] text-3xl text-zinc-400 ri-close-fill"></i>
        )}

        {query.length > 0 && (
           <div className='z-[100] absolute w-[50%] h-[50vh] bg-zinc-200 top-[90%] overflow-auto ml-[50px]'> 
           {searches.map((s,index) => 
             <Link to={`/${s.media_type}/details/${s.id}`} key={index} className='hover:text-black hover:bg-zinc-300 duration-300 flex justify-start items-center p-8 text-zinc-600 font-semibold border-b-2 border-zinc-100'>
   
               <img className='w-[10vh] h-[10vh] rounded object-cover mr-5'
                src={ s.backdrop_path || s.profile_path ? `https://image.tmdb.org/t/p/original/${s.backdrop_path || s.profile_path}`: noimage }  />
               <span>{ s.name || s.title || s.origial_name || s.original_title}</span>
   
             </Link> 
           )}
         </div> 
        )}
       

    </div>
  )
}

export default Topnav
