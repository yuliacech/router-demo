import {NavLink} from "react-router-dom";
import React from "react";
import './Results.css';

function Results(props) {
    return (
        <>
            <h2>{props.tab === 'favs' ? 'Favorites' : 'Cinemas'}</h2>
            <ul>
                {props.cinemas.map((cinema, index) => (
                    <li key={index}><NavLink to={`/${props.tab ?? 'cinemas'}/${cinema.id}`}>{cinema.name}</NavLink>
                    </li>)
                )}
            </ul>
        </>
    )
        ;
}

export default Results;