import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">🅸🅽🆂🆃🅰🅶🆁🅰🅼</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="row-reverse" />
                <Navbar.Collapse id="basic-navbar-nav" className="row-reverse">

                    <Form inline >
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}

                        <Button variant="outline-primary " >LogIn</Button>
                        <Button variant="outline-primary " className="mx-2">SignUp</Button>

                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

// export default Navbar