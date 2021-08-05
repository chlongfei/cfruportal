import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {useCookies} from 'react-cookie';

import Admin from './Admin/Admin';
import Landing from './Landing/Landing';
import Reporting from './Reporting/Reporting';

export default function App(){
    
    const [cookies] = useCookies(["rf"]);

    function Protected(){
        if(cookies.auth > 0){
            return <Admin/>
        }else{
            return <Landing/>
        }
    }

    if(cookies.auth > 0){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Protected/>
                    </Route>
                    <Route exact path="/reporting">
                        <Reporting/>
                    </Route>
                </Switch>
            </Router>
        )
    }else{
        return <Landing/>
    }

    
}