import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar2() {
  return (
    <Navbar
      //   bg="secondary"
      //   variant="light"
      expand="lg"
      style={{ backgroundColor: "lightgray", marginBottom: 25 }}
    >
      <Container fluid>
        <Link to={"/"}>
          <Navbar.Brand style={{ fontWeight: "bold" }}>
            Relevel Social Connector
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ marginLeft: 1100 }}>
            <Link to={"/signup"}>
              <div
                style={{
                  fontSize: 20,
                  textDecoration: "none",
                  color: "gray",
                  marginRight: 10,
                }}
              >
                Logout
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
