import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const List = ({ views, cities, setCities }) => {
    function handleChange(e) {
        setCities(e.target.id)

    }
const popPlaces = ["new_york","los_angeles", "chicago", "houston", "phoenix", "philadelphia","san_diego","dallas","austin","boston" ]
    return (
        <div>
            <p>Not sure where to get started? </p> <p>Take a look one of these cities below!</p>
            <section className="mainCities">
            {popPlaces.map((pop) => {
                return(
                        <div className="cityCard" key={pop}>
                            <Link id={pop} onClick={handleChange}>{pop}</Link>
                        </div>
                )
            })}
            </section>
        </div>        
 
    );
};

export default List;