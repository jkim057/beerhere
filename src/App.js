import React, { useState,useEffect } from 'react';
import Logo from './component/Logo'
import Search from './component/Search'
import List from './component/List'
import Viewer from './component/Viewer'
import './App.css';

function App() {
  const [views, setViews] = useState([])
  const url = 'https://api.openbrewerydb.org/breweries?'
  useEffect(() => {
      fetch(url)
          .then((res) => res.json())
          .then((resJson) => {
            setViews(resJson)
            console.log(resJson)
          })
          .catch(console.error)
  }, [])

  return (
    
    <div className="framework">
      
      
  
      {/* <Route path ="/"  /> */}
      <Logo />
      {/* logo to refresh the page */}

      <Search />
      {/* When cities are entered, breweries will show up in the viewer. */}
      
      <List />
      {/* list of popular cities (either by population or most breweries in the area), and when those cities are clicked, the viewer is updated to breweries in that city. */}
      
      <Viewer />
      {/* will display breweries in the cities selected */}
    </div>
  );
}

export default App;
