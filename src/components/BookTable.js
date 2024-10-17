/* MSSV CE180986
 Hoten: NGUYEN CONG HIEU */
import React, { Component } from "react";

import "../styles/Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { Row, Col, Button, Form } from "react-bootstrap";

export default function AppBooktable() {
  <Form>
    <Row>
      <Form.Group as={Col} className="mb-3">
        <Form.Control type="text" placeholder="Your Name *" />
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Form.Control type="email" placeholder="Your Email *" />
      </Form.Group>
      <Form.Group as={Col} className="mb-3">
        <Form.Select aria-label="Select a Service">
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
    </Row>
    <Form.Group as={Col} className="mb-3">
      <Form.Control
        as="textarea"
        placeholder="Please enter your comment"
        rows={5}
      />
    </Form.Group>
    <Button variant="warning" type="submit" className="text-white">
      Send Message
    </Button>
  </Form>;
}
