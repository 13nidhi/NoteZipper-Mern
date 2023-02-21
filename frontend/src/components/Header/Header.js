import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Container} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userAction';

const Header = ({setSearch}) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userLogin = useSelector(state => state.userLogin);   
  const {userInfo} = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/")
  }

  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Note Zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbarScroll">
            <Nav className='m-auto'>
                <Form inline>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-sm-2"
                    aria-label="Search"
                    onChange={(e) => setSearch(e.target.value)}
                 />
                </Form>
            </Nav>
            {userInfo ? 
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand>
              <Link to="/mynotes">My Notes</Link>
              </Navbar.Brand>
            <NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item 
                onClick={logoutHandler}
                >
                Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav> : <Nav>
              <Navbar.Brand>
              <Link to="/mynotes">My Notes</Link>
              </Navbar.Brand>
          </Nav> }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
