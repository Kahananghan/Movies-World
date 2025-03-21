import React from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './Components/Home' 
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movies from './Components/Movies'
import TvShows from './Components/TvShows'
import People from './Components/People'
import About from './Components/About'
import Contact from './Components/Contact'
import Moviedetails from './Components/Moviedetails'
import Tvshowdetails from './Components/Tvshowdetails'
import Peopledetails from './Components/Peopledetails'
import Trailer from './Components/Templates/Trailer'
import NotFound from './Components/NotFound'

function App() {
  return (
    <div className='bg-[#1F1E24] w-screen h-screen flex overflow-x-hidden'>
      
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/trending" element={<Trending />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/details/:id" element={<Moviedetails />} >
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/tvshows" element={<TvShows />} />
      <Route path="/tv/details/:id" element={<Tvshowdetails />} >
        <Route path="/tv/details/:id/trailer" element={<Trailer />} />
      </Route>
      <Route path="/people" element={<People />} />
      <Route path="/person/details/:id" element={<Peopledetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
      
    </Routes>

    </div>
  )
}

export default App
