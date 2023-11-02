import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

function Account() {
  return (
    <Row className="d-flex justify-content-center">
        <Col md={6} >
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label className="text-white">Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label className="text-white">Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Invia
      </Button>
    </Form>
    </Col>
    </Row>
  );
}

export default Account;