import React from "react";
import Navigation from "./Navigation";
import Results from "./Results";
import Detail from "./Detail";
import {getFavs} from "./services";


function Main(props) {
    const cinemasToDisplay = props.tab === 'favs' ? getFavs(props.cinemas, props.favs) : props.cinemas;
    return (
        <>
            <Navigation tab={props.tab}/>
            <Results tab={props.tab} cinemas={cinemasToDisplay} cinemaID={props.cinemaID}/>
            <Detail tab={props.tab} cinemas={cinemasToDisplay} cinemaID={props.cinemaID}/>
        </>);
}

export default Main;