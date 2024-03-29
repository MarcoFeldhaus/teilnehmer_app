import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import logo from "./stelcon-logo.png";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar style={{ backgroundColor: "#0290D3" }} variant="light">
      <Navbar.Brand href="/#" style={{ marginRight: "6rem", color: "#003c71" }}>
        <img
          src={logo}
          style={{ marginRight: "10px" }}
          alt=""
          width="100"
          height="35px"
        />
        Gewinnspiel
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/Products">Teilnehmer hinzufügen</Nav.Link>
          <Nav.Link href="/Home">Alle Teilnehmer</Nav.Link>
          <Nav.Link href="/About">Teilnahmebedingungen</Nav.Link>
          <Nav.Link href="/Contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
