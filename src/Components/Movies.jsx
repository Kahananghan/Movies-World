import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom'
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';
import Cards from './Templates/Cards';

function Movies() {
    document.title = 'MOVIES WORLD | Movies'
    const navigate = useNavigate();
    const [category, setcategory] = useState("now_playing");
    const [movie, setmovie] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const getmovie = async () => {
        try {
            const {data} = await axios.get(`/movie/${category}?page=${page}`);   

            if(data.results.length > 0){
                setmovie((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }       
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(movie.length == 0){
            getmovie()
        }else{
            setmovie([])
            setpage(1)
            getmovie()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category])

    return movie.length > 0 ? (
        <div className='w-full h-screen px-[3%] overflow-y-auto'>
    
          <div className='w-full flex items-center'>
            <h1 className='text-2xl font-semibold text-zinc-400 flex justify-center items-center'>
                <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                Movie<small className='text-sm ml-2 text-zinc-600'>({category})</small>
            </h1>
    
            <Topnav />
            <Dropdown title="Category" option={["popular","top_rated","upcoming","now_playing"]} func={(e) => setcategory(e.target.value)} /> 
            <div className='w-[3%]'></div>
            
          </div>
    
        <InfiniteScroll 
            dataLength={movie.length}
            next={getmovie()}
            hasMore={hasMore}
            loader={<Loader/>}
        >
            <Cards data={movie} title="movie"/>
        </InfiniteScroll>
          
        </div>
    
      ) : (<Loader/>)
}

export default Movies
