import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MainNavbar = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/reports">Reports</Nav.Link>
            <NavDropdown title="Models" id="models-dropdown">
              <NavDropdown.Item href="/regression">
                Regression Tree
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/classification">
                Classification Tree
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/logistic">
                Logistic Regression
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Visualizations" id="visualizations-dropdown">
              <NavDropdown.Item href="/download">Download CSV</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/kepler">Kepler.gl</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/dthree">D3.js</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse> */}
      </Navbar>
    </div>
  );
};

export default MainNavbar;
