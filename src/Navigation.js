import {Link} from "react-router-dom";
import React from "react";

function Navigation(props) {
    return (<nav>
        <ul>
            <li>
                <Link to="/">Home (defaults to all cinemas)</Link>
            </li>
            <li>
                {
                    props.tab === 'favs' ? (<Link to="/cinemas">Back to all cinemas</Link>) : (<Link to="/favs">Favs</Link>)
                }
            </li>
            <li>
                <Link to="/not_found_route">Not Found Route will redirect to /</Link>
            </li>
        </ul>
    </nav>);
}

export default Navigation;