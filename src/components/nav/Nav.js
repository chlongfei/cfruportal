import "./nav.css";

import { Container, Navbar, Button } from "react-bootstrap";
import { useCookies } from 'react-cookie';

export default function Navigation(){
    const [cookie, removeCookie] = useCookies(["rf"]);

    function handleLogout(){
        removeCookie("auth");
        window.location.reload();
    }

    return(
        <div id="navigation_bar">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">CFRU 93.3FM</Navbar.Brand>
                    <Navbar.Text>
                        Welcome {cookie.username} <Button variant="secondary" onClick={handleLogout}>Logout</Button>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    )
}