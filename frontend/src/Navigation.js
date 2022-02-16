import {Container, Navbar, NavLink, Nav} from "react-bootstrap";
import React from "react";

 class Navigation extends React.Component{
    constructor(props) {
        super(props);
    }




    render() {
        return(
            <>
                <Navbar variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Names and Robots</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                            <Nav.Link href="/profil">{localStorage.getItem("name")}</Nav.Link>

                        </Nav>


                    </Container>
                </Navbar>
            </>




        )
    }
}
export default Navigation;