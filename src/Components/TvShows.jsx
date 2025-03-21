import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom'
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';
import Cards from './Templates/Cards';


function TvShows() {
    document.title = 'MOVIES WORLD | Tvshows'
    const navigate = useNavigate();
    const [category, setcategory] = useState("airing_today");
    const [tvshows, settvshows] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const gettvshows = async () => {
        try {
            const {data} = await axios.get(`/tv/${category}?page=${page}`);   

            if(data.results.length > 0){
                settvshows((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }       
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(tvshows.length == 0){
            gettvshows()
        }else{
            settvshows([])
            setpage(1)
            gettvshows()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category])

 return tvshows.length > 0 ? (
        <div className='w-full h-screen px-[3%] overflow-y-auto'>
    
          <div className='w-full flex items-center'>
            <h1 className='text-2xl font-semibold text-zinc-400 flex justify-center items-center'>
                <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                TvShows<small className='text-sm ml-2 text-zinc-600'>({category})</small>
            </h1>
    
            <Topnav />
            <Dropdown title="Category" option={["on_the_air","top_rated","popular","airing_today"]} func={(e) => setcategory(e.target.value)} /> 
            <div className='w-[3%]'></div>
            
          </div>
    
        <InfiniteScroll 
            dataLength={tvshows.length}
            next={gettvshows()}
            hasMore={hasMore}
            loader={<Loader/>}
        >
            <Cards data={tvshows} title="tv"/>
        </InfiniteScroll>
          
        </div>
    
      ) : (<Loader/>)
}

export default TvShows
