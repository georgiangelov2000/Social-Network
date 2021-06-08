import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
} from "react-bootstrap-icons";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    company: "",
    website: "",
    location: "",
    status: "",
    skills: "",
    bio: "",
    twitter: "",
    facebook: "",
    linkedin: "",
    youtube: "",
    instagram: "",
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  return (
    <Container>
      <Form className="text-center">
        <h1 className="text-center">Create your profile</h1>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control size="sm" as="select" name="status">
            <option>* Select Professional Status</option>
            <option value="Developer">Developer</option>
            <option value="Junior Developer">Junior Developer</option>
            <option value="Senior Developer">Senior Developer</option>
            <option value="Manager">Manager</option>
            <option value="Student or Learning">Student or Learning</option>
            <option value="Instructor">Instructor or Teacher</option>
            <option value="Intern">Intern</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText1">
          <Form.Control
            size="sm"
            type="text"
            name="company"
            placeholder="Company"
            // value={company}
            //          onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Control
            size="sm"
            type="text"
            name="website"
            placeholder="Website"
            // value={website}
            //        onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText3">
          <Form.Control
            size="sm"
            type="text"
            name="location"
            placeholder="Location"
            // value={location}
            //      onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            size="sm"
            as="textarea"
            name="skills"
            placeholder="Skills"
            // value={skills}
            rows={3}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Control
            size="sm"
            as="textarea"
            name="bio"
            placeholder="Bio"
            // value={bio}
            rows={3}
          />
        </Form.Group>

        <h5 className="text-center">Social Network Links</h5>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTwitter">
            <Form.Label>
              <Twitter />
            </Form.Label>
            <Form.Control size="sm" type="text" placeholder="Twitter" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridFacebook">
            <Form.Label>
              <Facebook />
            </Form.Label>
            <Form.Control size="sm" type="text" placeholder="Facebook" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridYoutube">
            <Form.Label>
              <Youtube />
            </Form.Label>
            <Form.Control size="sm" type="text" placeholder="Youtube" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridLinkedin">
            <Form.Label>
              <Linkedin />
            </Form.Label>
            <Form.Control size="sm" type="text" placeholder="Linkedin" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridInstagram">
            <Form.Label>
              <Instagram />
            </Form.Label>
            <Form.Control size="sm" type="text" placeholder="Instagram" />
          </Form.Group>
        </Row>

        <Button variant="primary" block size="sm">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default CreateProfile;
