import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addEducation } from "../../../actions/profile";
import { Form, Button, Container } from "react-bootstrap";

const AddEducation = ({ addEducation }) => {
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
  });

  const { school, degree, fieldofstudy, from, to, description, current } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    addEducation(formData);
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <h3 className="text-center">Add Your Education</h3>

        <Form.Group className="mb-3" controlId="formBasicText1">
          <Form.Control
            size="sm"
            type="text"
            placeholder="* School or Bootcamp"
            name="school"
            value={school}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Current or previous school
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Control
            size="sm"
            type="text"
            placeholder="* Degree or Certificate"
            name="degree"
            value={degree}
            onChange={onChange}
          />
          <Form.Text className="text-muted">Completed degree</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText3">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Field of Study"
            name="fieldofstudy"
            value={fieldofstudy}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Please describe field of study
          </Form.Text>
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
            placeholder="Education Description"
            value={description}
            rows={3}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Please descripe more information about your education
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="current"
            checked={current}
            value={current}
            onChange={() => setFormData({ ...formData, current: !current })}
            label="Current School"
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

export default connect(null, { addEducation })(AddEducation);
