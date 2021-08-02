import React, {useState} from "react";
import "./login.css";
import {Form} from "react-bootstrap";
import PropTypes from 'prop-types';






export default function Login(){

    var [username,setUser] = useState();
    var [password,setPassword] = useState();

    function authenticate(event){
        event.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify([
        {
            "state": "0",
            "user": username,
            "pass": password
        }
        ]);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://script.google.com/macros/s/AKfycbw_LN9yaNq1MRyPAtV_nd9YzmHO_Bo1DR_cwL0RSBg4QSx69IVvMCRXA9vzLDLtapKi/exec", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        alert("Credentials Sent");
    }

    return(
        <div id="login">
            <Form onSubmit={authenticate}>
                <input type="text" placeholder="username" onChange={(e)=>setUser(e.target.value)}/><br/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type="submit" className="btn btn-primary">Login</button>
            </Form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  };