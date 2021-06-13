import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addExperience } from "../../../actions/profile";
import Alert from "../../Alert/Alert";

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: "",
    title: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });
  const { company, title, location, from, to, current, description } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addExperience(formData, history);
  };

  return (
    <Container>
      <Alert />
      <Form onSubmit={onSubmit}>
        <h3 className="text-center">Create Experience details</h3>

        <Form.Group className="mb-3" controlId="formBasicText1">
          <Form.Control
            size="sm"
            type="text"
            placeholder="* Job Title"
            name="title"
            value={title}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Current or previous work title
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Control
            size="sm"
            type="text"
            placeholder="* Company"
            name="company"
            value={company}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Current or previous company name
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText3">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={onChange}
          />
          <Form.Text className="text-muted">Location of the company</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText4">
          <Form.Label>Form Date</Form.Label>
          <Form.Control
            size="sm"
            type="date"
            name="from"
            value={from}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText5">
          <Form.Label>To Date</Form.Label>
          <Form.Control
            size="sm"
            type="date"
            name="to"
            value={to}
            onChange={onChange}
            disabled={current}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Control
            size="sm"
            as="textarea"
            name="description"
            placeholder="Job Description"
            value={description}
            rows={3}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Describe current or previous work
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="current"
            checked={current}
            value={current}
            onChange={() => {
              setFormData({ ...formData, current: !current });
            }}
            label="Current job"
          />
        </Form.Group>

        <Button
          type="submit"
          value="Submit"
          variant="primary"
          block
          size="sm"
          className="mb-3"
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

export default connect(null, { addExperience })(AddExperience);
