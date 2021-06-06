import React, { useState,useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button,Container} from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Form>
        <h1>Sign in</h1>

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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
