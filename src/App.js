import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Search from './component/Search'
import Movieview from './component/Movieview';
import Hero from './component/Hero';
import Page404 from './component/Page404';
import { MovieCard } from './component/Search';
import {Routes,Route,useNavigate} from 'react-router-dom';

function App() {

  const [searchResults,setSearchResults] = useState([]);
  const [searchText,setSearchText]= useState('');
  const navigate = useNavigate();
 //https://api.themoviedb.org/3/movie/157336/videos?api_key=a57611f6cc14a62c7b55221866333b01  /343611
 //&language=en-US&query=${searchText}&page=1&include_adult=false
 //ab166ff82684910ae3565621aea04d62

 useEffect(() => {
  if(searchText) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab166ff82684910ae3565621aea04d62&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        setSearchResults(data.results)
      })
      .catch(err=>{
        if(err){
          navigate('/Page404')
        }
      }
       
      )
  }
}, [searchText,navigate])
    
    //console.log(searchText,'is search Text')
    
    function submitHandelar(event){
      event.preventDefault();
      const title=`We are searching for ${searchText}`;
      const resultHtml = searchResults.map((obj,i) =>{
        return <MovieCard movie={obj} key={i}/>
    })
      return (
        <>
          <Hero name={title}/>
        {resultHtml && <div className="row">
            {resultHtml}</div>}
        </>
      )
    }

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/search' element={<Search searchText={searchText} searchResults={searchResults} submitHandelar={submitHandelar}/>}/>
          <Route path='/movie/:id' element={<Movieview/>}/>
          <Route path='/Page404' element={<Page404/>}/>
      </Routes>
    </div>
  );
}

export default App;
