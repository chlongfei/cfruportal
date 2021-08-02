import React, {useState} from "react";
import "./login.css";
import {Form} from "react-bootstrap";
import PropTypes from 'prop-types';
import { Redirect } from "react-router";






export default function Login(){

    var [username,setUser] = useState();
    var [password,setPassword] = useState();

    function authenticate(event){
        event.preventDefault();
        fetch('https://script.google.com/macros/s/AKfycbw_LN9yaNq1MRyPAtV_nd9YzmHO_Bo1DR_cwL0RSBg4QSx69IVvMCRXA9vzLDLtapKi/exec',{
            method: 'post',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': "*"
                },
            body:{
                "user":username,
                "password":password
            }
        });
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