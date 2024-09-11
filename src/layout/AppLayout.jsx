import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import Footer from "../pages/components/Footer/Footer";
import "./AppLayout.style.css";


const AppLayout = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchByKeyword = (event) => {
    event.preventDefault();
    navigate(`/activity?q=${keyword}`);
    setKeyword("")
  };
  return (
    <div className="app-container">
      <Navbar expand="lg" variant="light" bg="light" className="navbar-container">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              height={30}
              className="m-1"
              src="https://static.vecteezy.com/system/resources/previews/017/396/814/original/netflix-mobile-application-logo-free-png.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            {/* Menu Items */}
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/activities">
                Activities
              </Nav.Link>
              <Nav.Link as={Link} to="/hotels">
                Hotels
              </Nav.Link>
              <Nav.Link as={Link} to="/flights" disabled>
                Flights
              </Nav.Link>
            </Nav>

            {/* temporary search bar */}
            <Form className="d-flex" onSubmit={searchByKeyword}>
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={keyword}
                onChange={(event) => setKeyword(event.target.value)}
              />
              <Button variant="outline-danger" type="submit">
                Search
              </Button>
            </Form>

            {/* Login */}
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/login">
                Sign in
              </Nav.Link>
              <NavDropdown title="My Account" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/profile/settings">
                  Settings
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Content */}
      <div className="content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default AppLayout;
