/* MSSV CE180986
 Hoten: NGUYEN CONG HIEU */
import React, { Component } from "react";

import "../styles/Header.css";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Nav,
  Navbar,
  Carousel,
  Card,
} from "react-bootstrap";

export default function AppHeaders() {
  return (
    <Row>
      <Col>
        <Container>
          <Row>
            <Col>
              <Navbar expand="lg" className="bg-dark navbar-dark">
                <Container fluid>
                  <Navbar.Brand className="pizza-house" href="#">
                    Pizza House
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                    <Nav
                      className="me-auto my-2 my-lg-0"
                      style={{ maxHeight: "100px" }}
                      navbarScroll
                    >
                      <Nav.Link href="#action1">Home</Nav.Link>
                      <Nav.Link href="#action2">About Us</Nav.Link>
                      <Nav.Link href="#action3">Contact</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me2"
                      />
                      <Button variant="danger">
                        <i className="fa fa-search"></i>
                      </Button>
                    </Form>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
