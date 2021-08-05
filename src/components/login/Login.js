import React, {useState} from "react";
import {useCookies} from 'react-cookie';

import "./login.css";
import {Form} from "react-bootstrap";

function validate(user, pwd){
    const db = new Map();
    db.set('admin', '12345');

    return db.get(user) === pwd;
}


export default function Login(){
    var [username,setUser] = useState("");
    var [password,setPassword] = useState("");

    const [cookie, setCookie] = useCookies(["rf"]);

    function validateForm(){
        return username.length > 0 && password.length > 0;
    }

    

    function handleSubmit(event){
        event.preventDefault();
        if(validate(username,password)){
            setCookie("username",username,{path:"/"});
            setCookie("auth", 1, {path:"/"});
            window.location.reload();
        }else{
            alert("Invalid Credentials");
        }
    }

    
    return(
        <div id="login">
            <Form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" onChange={(e)=>setUser(e.target.value)}/><br/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/><br/>
                <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Login</button>
            </Form>
        </div>
    )
}