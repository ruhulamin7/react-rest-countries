import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country">
            <img width='100%' src={props.flag} alt='flag'></img>
            <h4>Country Name: {props.name}</h4>
            <h5>Capital : {props.capital}</h5>
            <h5>Population: {props.population}</h5>
        </div>
    );
};

export default Country;