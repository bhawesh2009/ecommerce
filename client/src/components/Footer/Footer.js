import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id = "foo">
      <Container className='main-footer' fluid>
      <Row>
        <Col sm={3} className='shop-summary'>
          <h2 id="red">Shop</h2>
          <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>
        </Col>
        <Col sm={2}>
          <h2 id="red">Policy Info</h2>
          <ul id="blue">
            <li id="white">
              <a href='/'>Privacy policy</a>
            </li>

            <li id="white">
              <a href='/'>Terms of sale</a>
            </li>

            <li id="white">
              <a href='/'>Terms of use</a>
            </li>

            <li id="white">
              <a href='/'>Report product</a>
            </li>

            <li id="white">
              <a href='/'>Some policy</a>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <h2 id ="red">Company</h2>
          <ul id="blue" >
            <li id="white">
              <a href='/'>About us</a>
            </li>
            <li id="white" >
              <a href='/'>Blog</a>
            </li>
            <li id="white">
              <a href='/'>Inroduction</a>
            </li>
            <li id="white">
              <a href='/'>FAQ</a>
            </li>
            <li id="white">
              <a href='/'>Contact us</a>
            </li>
          </ul>
        </Col>
        <Col sm={2}>
          <h2 id ="red">Business</h2>
          <ul id="blue">
            <li id="white" >
              <a href='/'>Sell with us</a>
            </li>
            <li id="white">
              <a href='/'>Advertisment</a>
            </li>
            <li id="white">
              <a href='/'>Terms of use</a>
            </li>
            <li id="white">
              <a href='/'>Affliciate sys</a>
            </li>
            <li id="white">
              <a href='/'>Deal of the day</a>
            </li>
          </ul>
        </Col>
        <Col sm={3}>
          <h2 id="red">Subscribe</h2>
          <div className='signup'>
            <div className='title'>
              <span className='signup-icon'>S</span>
              <p id="color">Sign up for our Newsletter</p>
            </div>
            <a href='/doSomething' className='signup-1b'>
              SIGN UP
            </a>
            <br />
            <a href='/update' className='signup-2b'>
              Update your preferences »
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    </footer>
  );
};

export default Footer;
