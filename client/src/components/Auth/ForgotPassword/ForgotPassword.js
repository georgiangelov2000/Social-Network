import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import axios from "axios";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/forgotpassword", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <Container className="mt-5">
      <h5 className="text-center">Forgot Password</h5>
      <Card className="w-50 m-auto p-5">
        <Form onSubmit={onSubmit} className="text-center w-50 m-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="text-center"
              size="sm"
              name="email"
              type="email"
              onChange={onChange}
              autoComplete="on"
            />
            <Form.Text className="text-muted">Enter your email</Form.Text>
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
        </Form>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
