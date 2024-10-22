import { useState } from "react";
import "./country.css"

const Country = ({country,handleVisited }) => {
    const {name,flags,population} = country;
    const [visit, setVisit] = useState(false)
    const handlerVisit = ()=>{
        setVisit(!visit)
    }
    // console.log(handleVisited)
    return (
        <div className={`country ${visit? 'clicked' : 'country'} `}>
            <h4>name: {name?.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population: {population} </p>
            <button onClick={handlerVisit}>{visit? 'visited': 'notVisited'}</button>
            <button onClick={()=>handleVisited(country)}>Mark Visited</button>
        </div>
    );
};

export default Country;