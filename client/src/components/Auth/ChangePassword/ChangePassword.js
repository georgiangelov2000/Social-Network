import React from "react";
import { Form, Card, Container, Button } from "react-bootstrap";

const ChangePassword = () => {
  return (
    <Container className="mt-5">
      <h5 className="text-center">Change Password</h5>
      <Card className="w-50 m-auto p-5">
        <Form className="text-center w-50 m-auto">
          <Form.Group controlId="formBasicEmail">
            <Form.Label> New password</Form.Label>
            <Form.Control
              className="text-center"
              size="sm"
              name="password"
              type="password"
              autoComplete="on"
            />
            <Form.Text className="text-muted">
              Enter your New password
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label> Confirm password</Form.Label>
            <Form.Control
              className="text-center"
              size="sm"
              name="confirm"
              type="confirm"
              autoComplete="on"
            />
            <Form.Text className="text-muted">
              Enter your Confirm password
            </Form.Text>
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

export default ChangePassword;
