import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Search =  ({views, cities, setCities, search, setSearch}) => {


     function inputCleaner(e){
         e.preventDefault()
        console.log(e.target)
        // let e.toLowerCase()
    }

    
    // function handleChange(e) {
    //     setCities(e.target.value)

    // }



    return (
        <div>
            <div className="searchCityContainer" >
                <form onSubmit={inputCleaner}>
                    <input  id="searchingInput" type="text" placeholder="Search Cities"/>  
                    <button  type="submit">Go</button>
                </form>
            </div>
        </div>        
    );
  {/* 
            * if mispelled, return a error message to the user (" please check your spelling and try again")
            *take the string and make undercase
            * search.split(" ")
            *
            * seperate all spaces with _ (underscores) */}

};

export default Search;