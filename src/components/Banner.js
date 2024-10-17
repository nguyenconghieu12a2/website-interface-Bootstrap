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

export default function AppBanner() {
  return (
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pizza1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Nguyen Cong Hieu CE180986</h3>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolitan is the best option!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pizza2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Nguyen Cong Hieu CE180986</h3>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolitan is the best option!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pizza3.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Nguyen Cong Hieu CE180986</h3>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolitan is the best option!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pizza4.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Nguyen Cong Hieu CE180986</h3>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolitan is the best option!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/pizza5.jpg"
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3 className="banner-title">Nguyen Cong Hieu CE180986</h3>
              <p>
                If you are looking for a traditional Italian pizza, the
                Neapolitan is the best option!
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
}
