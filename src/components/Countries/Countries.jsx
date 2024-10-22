import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Coutries.css'
const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visited, setvisited] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    const handleVisited = (country)=>{
        console.log('haha coila ailam')
        const newVisitedList =[...visited,country]
        setvisited(newVisitedList)
        
    }
    return (
        <div>
            countries : {countries.length}
            <div>
                <h2>Visited Country:{visited.length} </h2>
                <ul>
                    {
                        visited.map(country=><li key={country.cca3}>  {country.name.common}</li>

                        )
                    }
                </ul>
            </div>
            <div className="container">
            {
                countries.map((country)=> <Country handleVisited={handleVisited} key={country.cca3} country={country} />
                )
            }
            </div>
        </div>
    );
};

export default Countries;