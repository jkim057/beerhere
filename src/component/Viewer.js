import React from 'react';


const Viewer = ({ views }) => {
    if(!views.length){
        return <h2>Loading...</h2>
    }

    function numSplit(number){
        // let num = []
        // num.push(number)
        // num.splice(2,0,"a")
        let number2 = "(" + number.slice(0,3) + ")-" + number.slice(3)
        let number3 = number2.slice(0,9) + "-" + number2.slice(9)
        return number3
    }



    return (
        <section className="container">
            {views.map((view) => {
                return(
                        <div className="card" key={view.id}>
                           <p>{view.name}</p> 
                           <p>{`${view.city}, ${view.state}`}</p>
                                {
                                    view.phone && <a href={`tel:${view.phone}`}>{numSplit(view.phone)}</a>
                                    // can i break up phone # into (###)-###-#### format inside map?
                                }
                                {
                                    view.website_url && <a style={{display: "block"}} target="_blank" rel="noreferrer"  href={view.website_url}>View Website</a>
                                }
                        </div>
                )
            })}
        </section>


    );
};

export default Viewer;