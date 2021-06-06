import React, { useEffect, useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Form, Button,Container} from "react-bootstrap";

const Register = () => {
  return (
    <Container>
      <Form>
        <h1>Sign up</h1>
        <Form.Group controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            size="sm"
            required
            type="text"
            placeholder="Enter name"
            name="name"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            required
            name="email"
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="sm"
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            size="sm"
            type="password"
            name="password2"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Register;
