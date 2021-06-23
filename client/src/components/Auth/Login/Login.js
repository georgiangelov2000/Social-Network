import React, { useState } from "react";
import PropTypes from "prop-types";
import { Redirect, Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { login } from "../../../actions/auth";
import Alert from "../../Alert/Alert";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Alert />
      <Row>
        <Col xs={6} className="m-auto">
          <Form onSubmit={onSubmit} className="text-center">
            <h1>Sign in</h1>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                size="sm"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={onChange}
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

            <Button
              className="mb-3"
              variant="primary"
              type="submit"
              size="sm"
              block
            >
              Submit
            </Button>
            <>
              <h6>Example Users</h6>
              <div>
                <small>Acc: georgi@abv.bg </small>
                <small>Pass: georgi123 </small>
              </div>
              <hr />
              <div>
                <small>Acc: petar@abv.bg </small>
                <small>Pass: petar123 </small>
              </div>
              <hr />
              <div>
                <small>Acc: ioan@abv.bg </small>
                <small>Pass: ioan123@abv.bg </small>
              </div>
              <hr />
            </>
            <Link to="/register">Don't Have an Account? </Link>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
