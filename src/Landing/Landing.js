import "./landing.css";
import Login from "../components/login/Login";

import {Container, Row} from 'react-bootstrap';

export default function Landing(){
    return(
        <div id='landing'>
            <Container fluid="sm">
                <h4>WELCOME TO THE</h4>
                <h3>CFRU PORTAL</h3>
                <Row className="justify-content-center">
                    <Login/>
                </Row>
            </Container>
        </div>
    )
}