import "./admin.css";

import {Col, Row, Container} from "react-bootstrap";

import Nagivation from "../components/nav/Nav";
import DateTime from "../components/dateTime/DateTime";
import QuickTasks from "../components/quickTasks/QuickTasks";
import Schedule from "../components/schedule/Schedule";

export default function Admin(prop){

    return(
        <div id="Admin">
            <Nagivation/>
            <Container className="module_area">
                <Row>
                    <Col sm={4}>
                        <DateTime/>
                        <QuickTasks/>
                    </Col>
                    <Col>
                        <Schedule/>
                    </Col>

                </Row>
            </Container>

        </div>
    )
}