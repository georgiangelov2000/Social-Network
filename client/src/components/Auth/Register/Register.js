import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
import PropTypes from 'prop-types';

const Register = ({register,isAuthenticated}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const { username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log("Passwords do not match");
    } else {
      register({ username, email, password });
      console.log('successfully register')
    }
  };

  if(isAuthenticated){
    return <Redirect to="/dashboard" />
  }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Sign up</h1>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            size="sm"
            type="text"
            placeholder="Enter Username"
            name="username"
            value={username}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={onChange}
            value={email}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            size="sm"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value={password}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            size="sm"
            type="password"
            name="password2"
            placeholder="Password"
            onChange={onChange}
            value={password2}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register })(Register);
