import { Redirect } from "react-router-dom";
import {Form} from "react-bootstrap";
import "./admin.css";

export default function Admin(prop){

    function logout(){
        sessionStorage.setItem("auth", false);
    }

    return(
        <div id="Admin">
            <h4>
                Hello {prop.user}!
            </h4>
            <Form onSubmit={logout}>
                <button type='submit' className="btn btn-secondary">Logout</button>
            </Form>
        </div>
    )
}