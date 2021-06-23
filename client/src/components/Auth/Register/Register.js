import React, { useState } from "react";

import Alert from "../../Alert/Alert";

import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { register } from "../../../actions/auth";
import { setAlert } from "../../../actions/alert";
import PropTypes from "prop-types";

const Register = ({ register, isAuthenticated }) => {
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
      setAlert("Password do not match", "danger");
    } else {
      register({ username, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container className="text-center">
      <Alert />
      <Row>
        <Col xs={6} className="m-auto">
          <Form onSubmit={onSubmit}>
            <h1>Sign up</h1>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                size="sm"
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onChange}
                autoComplete="on"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="sm"
                name="email"
                type="email"
                placeholder="Email"
                onChange={onChange}
                value={email}
                autoComplete="on"
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
                autoComplete="on"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                size="sm"
                type="password"
                name="password2"
                placeholder="Confirm Password"
                onChange={onChange}
                value={password2}
                autoComplete="on"
              />
            </Form.Group>

            <Button
              className="mb-3"
              variant="primary"
              type="submit"
              size="sm"
              block
            >
              Submit
            </Button>

            <Link to="/login">Already have an account?</Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register })(Register);
