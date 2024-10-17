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

export default function AppProduct() {
  return (
    <Row className="mt-5">
      <Col>
        <Container className="text-white">
          <Row>
            <Col>
              <h2 className="our-menu">Our Menu</h2>

              <Container>
                <Row>
                  <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Card>
                      <Card.Img variant="top" src="/images/menu1.jpg" />
                      <Card.Body>
                        <div className="card-notify">
                          <span className="notify">SALE</span>
                        </div>
                        <Card.Title>Margherita Pizza</Card.Title>

                        <Card.Text className="old-price old">$40.00</Card.Text>

                        <Card.Text className="discount new">$24.00</Card.Text>

                        <Button variant="dark" className="form-control">
                          Buy
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Card>
                      <Card.Img variant="top" src="/images/menu2.jpg" />
                      <Card.Body>
                        <Card.Title>Mushroom Pizza</Card.Title>
                        <Card.Text>$25.00</Card.Text>
                        <Button variant="dark" className="form-control">
                          Buy
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Card>
                      <Card.Img variant="top" src="/images/menu3.jpg" />
                      <Card.Body>
                        <div className="card-notify">
                          <span className="notify">NEW</span>
                        </div>
                        <Card.Title>Hawaiian Pizza</Card.Title>
                        <Card.Text>$30.00</Card.Text>
                        <Button variant="dark" className="form-control">
                          Buy
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Card>
                      <Card.Img variant="top" src="/images/menu4.jpg" />
                      <Card.Body>
                        <div className="card-notify">
                          <span className="notify">SALE</span>
                        </div>
                        <Card.Title>Pesto Pizza</Card.Title>
                        <Card.Text className="old-price old">$60.00</Card.Text>
                        <Card.Text className="discount new">$30.00</Card.Text>
                        <Button variant="dark" className="form-control">
                          Buy
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>

              <Row className="mt-5">
                <Col>
                  <h2 className="text-center text-white book-table">
                    Book Your Table
                  </h2>

                  <Form className="footer">
                    <Row>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Control type="text" placeholder="Your Name *" />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Control type="email" placeholder="Your Email *" />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3">
                        <Form.Select aria-label="Select a Service">
                          <option>Select a Service</option>
                          <option value="1">Service One</option>
                          <option value="2">Service Two</option>
                          <option value="3">Service Three</option>
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
                    <Button
                      variant="warning"
                      type="submit"
                      className="text-white textt"
                    >
                      Send Message
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
}
