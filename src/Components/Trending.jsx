import React from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Cards from './Templates/Cards';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
    document.title = 'MOVIES WORLD | Trending Page'
    const navigate = useNavigate();
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [trending, settrending] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const gettrending = async () => {
        try {
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);   

            if(data.results.length > 0){
                settrending((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }        
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(trending.length == 0){
            gettrending()
        }else{
            settrending([])
            setpage(1)
            gettrending()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category, duration])

  return trending.length > 0 ? (
    <div className='w-full h-screen px-[3%] overflow-y-auto'>

      <div className='w-full flex items-center'>
        <h1 className='text-2xl font-semibold text-zinc-400 flex'>
            <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
            Trending
        </h1>

        <Topnav />
        <Dropdown title="Category" option={["tv","movie","all"]} func={(e) => setcategory(e.target.value)} /> 
        <div className='w-[3%]' ></div>
        <Dropdown title="Duration" option={["day","week"]} func={(e) => setduration(e.target.value)} /> 
      </div>

    <InfiniteScroll 
        dataLength={trending.length}
        next={gettrending()}
        hasMore={hasMore}
        loader={<Loader/>}
    >
        <Cards data={trending} title={category}/>
    </InfiniteScroll>
      
    </div>

  ) : (<Loader/>)
}

export default Trending
