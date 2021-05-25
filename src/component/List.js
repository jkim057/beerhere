import React from 'react';


const List = ({ setCities }) => {
    function handleChange(e) {
        setCities(e.target.id)

    }
    const popPlaces = ["new_york","los_angeles", "chicago", "houston", "phoenix", "philadelphia","san_diego","dallas","austin","boston" ]

    return (
        <div className="sideBar">
            <p>Not sure where to get started? </p> <p>Take a look one of these cities below!</p>
            <section className="mainCities">
            {popPlaces.map((pop) => {
                return(
                        <div className="cityCard" key={pop}>
                            <p id={pop} onClick={handleChange}>{pop}</p>
                        </div>
                )
            })}
            </section>
        </div>        
 
    );
};

export default List;