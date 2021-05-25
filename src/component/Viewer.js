import React, {useState} from 'react';


const Viewer = ({ views }) => {
    if(!views.length){
        return <h2>Loading...</h2>
    }
    return (
        <section className="container">
            {views.map((view) => {
                return(
                        <div className="card" key={view.id}>
                           <p>{view.name}</p> 
                           <p>{`${view.city}, ${view.state}`}</p>
                                {
                                    view.website_url &&  <a target="_blank" href={view.website_url}>View Website</a>
                                }

                            {/* {console.log(view)} */}
                        </div>
                )
            })}
        </section>


    );
};

export default Viewer;