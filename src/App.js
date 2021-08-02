import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Admin from './Admin/Admin'
import Landing from './Landing/Landing';


function Protected(){
    var auth = sessionStorage.getItem("auth");
    if(auth){
        return <Admin/>
    }else{
        <Landing/>
    }
}


export default function App(){

    if(sessionStorage.getItem('auth')){
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Protected/>
                    </Route>
                </Switch>
            </Router>
        )
    }else{
        return <Landing/>
    }

    
}