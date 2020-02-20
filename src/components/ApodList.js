import React, { useState, useEffect }from "react";
import axios from "axios";
import ApodCard from "./ApodCard";

const ApodList= () => {
    const [apod, setApod] = useState([]);
 
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response.data);
            setApod(response.data);
        })
        .catch(error => {
            console.log ( 'Now You Fucked Up', error);
        });
    }, []);


    return (
        <div className="Apod">
           
            
            <ApodCard 
                key={apod.key}
                date={apod.date}
                imgUrl={apod.url}
                title={apod.title}
                explain={apod.explanation}
            />
                   
        </div>    
    )
}

export default ApodList; 