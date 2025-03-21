import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from 'react-router-dom'
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';
import Cards from './Templates/Cards';

function Popular() {
    document.title = 'MOVIE WORLD | Popular Page'
    const navigate = useNavigate();
    const [category, setcategory] = useState("movie");
    const [popular, setpopular] = useState([]);
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);

    const getpopular = async () => {
        try {
            const {data} = await axios.get(`${category}/popular?page=${page}`);   

            if(data.results.length > 0){
                setpopular((prev) => [...prev, ...data.results]); 
                setpage(page + 1)
            }else{
                sethasMore(false)
            }          
        } catch (error) {
            console.log("error:" , error);
        }
      } 

      const refreshhandler = () => {
        if(popular.length == 0){
            getpopular()
        }else{
            setpopular([])
            setpage(1)
            getpopular()
        }
      }
      
      useEffect(() => {
        refreshhandler();
      }, [category])

    return popular.length > 0 ? (
        <div className='w-full h-screen px-[3%] overflow-y-auto'>
    
          <div className='w-full flex items-center'>
            <h1 className='text-2xl font-semibold text-zinc-400 flex justify-center items-center'>
                <i onClick={() => navigate(-1)} className="hover:text-[#6556CD] ri-arrow-left-line mr-2"></i>
                Popular<small className='text-sm ml-2 text-zinc-600'>({category})</small>
            </h1>
    
            <Topnav />
            <Dropdown title="Category" option={["tv","movie","all"]} func={(e) => setcategory(e.target.value)} /> 
            <div className='w-[3%]' ></div>
            
          </div>
    
        <InfiniteScroll 
            dataLength={popular.length}
            next={getpopular()}
            hasMore={hasMore}
            loader={<Loader/>}
        >
            <Cards data={popular} title={category}/>
        </InfiniteScroll>
          
        </div>
    
      ) : (<Loader/>)
}

export default Popular
