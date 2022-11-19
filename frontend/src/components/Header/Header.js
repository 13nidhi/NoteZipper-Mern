import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Container} from "react-bootstrap";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">Note Zipper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
                <Form inline>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-sm-2"
                    aria-label="Search"
                 />
                </Form>
            </Nav>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">My Notes</Nav.Link>
            <NavDropdown title="Nidhi Patwa" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
