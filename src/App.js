import React, { useState, useEffect } from 'react';
import{ List, Logo, Search, Viewer} from './component'

import './App.css';

function App() {
  const [views, setViews] = useState([])
  const [cities, setCities] = useState("")

 
  useEffect(() => {
      fetch(`https://api.openbrewerydb.org/breweries?by_city=${cities}`)
          .then((res) => res.json())
          .then((resJson) => {
            setViews(resJson)
            // console.log(resJson)
          })
          .catch(console.error)
  }, [cities])


  return (
    
    <div className="framework">
      
      
  
      {/* <Route path ="/"  /> */}
      <Logo />
      {/* logo to refresh the page */}

      <Search />
      {/* When cities are entered, breweries will show up in the viewer. */}

      {/* onClick={onClick} */}
      <List views={views} cities={cities} setCities={setCities}/>
      {/* list of popular cities (either by population or most breweries in the area), and when those cities are clicked, the viewer is updated to breweries in that city. */}
      
      <Viewer views={views}/>
      {/* will display breweries in the cities selected */}

    </div>
  );
}

export default App;
