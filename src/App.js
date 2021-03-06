import React, { useState, useEffect } from 'react';
import{ List, Logo, Search, Viewer} from './component'


import './App.css';

function App() {
  const [views, setViews] = useState([]);
  const [cities, setCities] = useState("");
  const [searchInput, setSearchInput] = useState("");

  function handleChange(event) {
    let stgCk = event.target.value
    stgCk = stgCk.toLowerCase()
    stgCk = stgCk.replaceAll(" ", "_" )
    setSearchInput(stgCk);  
    // what happens if I set stgCk to the cities state, then told submit to run the getBrews function? would that make a infinite loop?
  }  
  function handleSubmit(event) {
    event.preventDefault();
    setCities(searchInput);
    setSearchInput("")
  }

  // function getBrews() {
  //   fetch(`https://api.openbrewerydb.org/breweries?by_city=${cities}`)
  //   .then((res) => res.json())
  //   .then((resJson) => {
  //     setViews(resJson)
  //   })
  //   .catch(console.error)
  // }
 
  useEffect(() => {
    fetch(`https://api.openbrewerydb.org/breweries?by_city=${cities}`)
      .then((res) => res.json())
      .then((resJson) => {
        setViews(resJson)
      })
      .catch(console.error)
  }, [cities])


  return (
    
    <div className="framework">

      <Logo />

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
