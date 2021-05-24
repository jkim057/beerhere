import React, { useState, useEffect } from 'react';
import{ List, Logo, Search, Viewer} from './component'
import { Route } from 'react-router-dom'

import './App.css';

function App() {
  const [views, setViews] = useState([]);
  const [cities, setCities] = useState("");
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    console.log(inputCleaner(event))

    
    setSearchInput(event.target.value);
       // inputCleaner();
  }
  
  function inputCleaner(event){
    let stgCk = event.target.value
    stgCk = stgCk.toLowerCase().replace(" ", "_" )
    console.log(stgCk)
    //white space works for the first 2 words, but not the 3rd. why?
  }
   // let e.toLowerCase()
               // * if mispelled, return a error message to the user (" please check your spelling and try again")
            // *take the string and make undercase
            // * search.split(" ")
            // *
            // * seperate all spaces with _ (underscores)
// 

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target.value)
    // inputCleaner();
  }

  function getBrews() {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${cities}`)
    .then((res) => res.json())
    .then((resJson) => {
      setViews(resJson)
      // console.log(resJson)
    })
    .catch(console.error)
  }
 
  useEffect(() => {
      getBrews();
  }, [cities,searchInput])


  return (
    
    <div className="framework">
      
      
  
      {/* <Route path ="/"  /> */}
      <Route path="/" exact component={Logo} />
      {/* logo to refresh the page */}

      <Search 
        views={views} 
        cities={cities} 
        setCities={setCities} 
        searchInput={searchInput} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}

        />
      {/* When cities are entered, breweries will show up in the viewer. */}

      {/* onClick={onClick} */}
      <List 
        views={views} 
        cities={cities} 
        setCities={setCities}
      />
      {/* list of popular cities (either by population or most breweries in the area), and when those cities are clicked, the viewer is updated to breweries in that city. */}
      
      <Viewer views={views}/>
      {/* will display breweries in the cities selected */}

    </div>
  );
}

export default App;
