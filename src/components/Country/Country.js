import React from 'react';
import './Country.css'

const Country = (props) => {
    const { flag, name, capital, population, region } = props.country
    console.log(props)
    return (
        <div className="country">
            <img width='100%' src={flag} alt='flag'></img>
            <h2 style={{ color: 'tomato' }}>{name}</h2>
            <h3>Capital : {capital}</h3>
            <h3>Population: {population}</h3>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default Country;