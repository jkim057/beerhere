import React from 'react';
import Logo from './component/Logo'
import Search from './component/Search'
import List from './component/List'
import Viewer from './component/Viewer'
import './App.css';

function App() {
  {function findBeer(){
    const url = 'https://api.openbrewerydb.org/breweries?'
    fetch(url)
        .then(res => res.json())
        .then(resJson=> {
            console.log(resJson)
        } )
        .catch(console.error)
        }}
  return (
    
    <div className="framework">
      
      
  
      <Logo />
      <Search />
      <List />
      <Viewer />
    </div>
  );
}

export default App;
