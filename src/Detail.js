import React from "react";

function Detail(props) {
    let selectedCinema = props.cinemaID ? props.cinemas.find(cinema => cinema.id === props.cinemaID) : undefined;
    return (<h3>Selected cinema
        is: {`${JSON.stringify(selectedCinema)}`}</h3>);
}

export default Detail;