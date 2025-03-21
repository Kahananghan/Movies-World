import React, { useEffect, useState } from 'react'
import Sidenav from './Templates/Sidenav'
import Topnav from './Templates/Topnav'
import axios from '../utils/axios'
import Header from './Templates/Header'
import Horizoncard from './Templates/Horizoncard'
import Dropdown from './Templates/Dropdown'
import Loader from './Loader'

function Home() {
    document.title = 'MOVIES WORLD | HomePage'
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

    const getheaderwp = async () => {
      try {
          const {data} = await axios.get("/trending/all/day");   
          let randomdata = data.results[(Math.random()*data.results.length).toFixed()]   
          setwallpaper(randomdata); 
         
      } catch (error) {
          console.log("error:" , error);
      }
    } 
 
    const gettrending = async () => {
      try {
          const {data} = await axios.get(`/trending/${category}/day`);   
          settrending(data.results); 
         
      } catch (error) {
          console.log("error:" , error);
      }
    } 
    
    useEffect(() => {
      gettrending();
      !wallpaper && getheaderwp();
    }, [category])

  return wallpaper && trending ? (
    <>
        <Sidenav/>
        <div className=' w-[80%] h-screen overflow-auto overflow-x-hidden'>
          <Topnav/>
          <Header data={wallpaper}  />

          <div className='w-full p-5 '>
            <div className=' flex justify-between'>
              <h1 className='text-3xl font-semibold text-zinc-400'>Trending</h1>
              <Dropdown title="Filter" option={['tv','movie','all']} func={(e) => setcategory(e.target.value)} />
            </div> 
          </div>

          <Horizoncard data={trending}/>
        </div>
      
    </>
  ) : (<Loader/> )
}

export default Home
