import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { login } from "../../../actions/auth";


const Login = ({login,isAuthenticated}) => {

  const [formData,setFormData]=useState({
    email:"",
    password:""
  });

  const {email,password}=formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e =>{
      e.preventDefault();
      login(email,password);
    }

    if (isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h1>Sign in</h1>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            size="sm"
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={onChange}
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { login })(Login);
