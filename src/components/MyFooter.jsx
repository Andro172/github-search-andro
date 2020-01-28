import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';

function MyFooter() {
  return (
    <div className="pb-4 pt-2 my-footer">
      <Container className="text-center">
        <Row className="mb-3 justify-content-center text-center">
          <Col className="mt-4 col-3 col-md-1">
            <span><FaFacebookF size="20" /></span>
          </Col>
          <Col className="mt-4 col-3 col-md-1">
            <span><FaGithub size="20" /></span>
          </Col>
          <Col className="mt-4 col-3 col-md-1">
            <span><FaLinkedin size="20" /></span>
          </Col>
        </Row>
        <hr />
        <p className="year mb-0">&#9400; 2020 All rights reserved</p>
      </Container>
    </div>
  );
}

export default MyFooter;
