import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Main from "./Main";

function App() {
    const cinemas = [
        {id: '1', name: 'cinema1'}, {id: '2', name: 'cinema2'}, {id: '3', name: 'cinema3'}
    ];
    const favs = ['1', '3'];
    return (
        <Router>
            <Switch>
                <Route exact path="/:tab(cinemas|favs)/:cinemaID?" render={({match}) => (
                    <Main tab={match.params.tab} cinemaID={match.params.cinemaID} favs={favs} cinemas={cinemas}/>
                )}>
                </Route>
                <Route exact path="/" render={() => (
                    <Main favs={favs} cinemas={cinemas}/>
                )}/>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}


export default App;
