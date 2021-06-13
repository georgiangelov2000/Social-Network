import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProfile } from "../../../actions/profile";
import Alert from "../../Alert/Alert";
import {
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
} from "react-bootstrap-icons";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const CreateProfile = ({ createProfile,history }) => {
  const [displaySocialFields, toggleSocialFields] = useState(false);

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

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSumbit = (e) => {
    e.preventDefault();
    createProfile(formData,history);
  };

  return (
    <Container>
      <Alert />
      <Form onSubmit={onSumbit} >
        <h3 className="text-center">Create your profile</h3>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Control
            size="sm"
            as="select"
            name="status"
            value={status}
            onChange={onChange}
          >
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
          <Form.Text className="text-muted">
            Give us an idea of where you are at in your career
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText1">
          <Form.Control
            size="sm"
            type="text"
            name="company"
            placeholder="Company"
            value={company}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Could be your own company or one you work for
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Control
            size="sm"
            type="text"
            name="website"
            placeholder="Website"
            value={website}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Could be your own or a company website
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText3">
          <Form.Control
            size="sm"
            type="text"
            name="location"
            placeholder="Location"
            value={location}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            City & state suggested (eg. Plovdiv, Bulgaria)
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            size="sm"
            as="textarea"
            name="skills"
            placeholder="Skills"
            value={skills}
            rows={3}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Please use comma separated values (eg.
            Javascript,React,MongoDB,ASP.NET)
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Control
            size="sm"
            as="textarea"
            name="bio"
            placeholder="Bio"
            value={bio}
            rows={3}
            onChange={onChange}
          />
          <Form.Text className="text-muted">
            Tell us a little about yourself
          </Form.Text>
        </Form.Group>
        <Button
          onClick={() => toggleSocialFields(!displaySocialFields)}
          variant="success"
          block
          size="sm"
          className="mb-5"
        >
          Add Social Network Links
        </Button>
        {displaySocialFields ? (
          <>
            <h5 className="text-center">Social Network Links</h5>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTwitter">
                <Form.Label>
                  <Twitter />
                </Form.Label>
                <Form.Control
                  onChange={onChange}
                  size="sm"
                  type="text"
                  placeholder="Twitter"
                  name="twitter"
                  value={twitter}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridFacebook">
                <Form.Label>
                  <Facebook />
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Facebook"
                  name="facebook"
                  value={facebook}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridYoutube">
                <Form.Label>
                  <Youtube />
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Youtube"
                  name="youtube"
                  value={youtube}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLinkedin">
                <Form.Label>
                  <Linkedin />
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Linkedin"
                  name="linkedin"
                  value={linkedin}
                  onChange={onChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridInstagram">
                <Form.Label>
                  <Instagram />
                </Form.Label>
                <Form.Control
                  size="sm"
                  type="text"
                  placeholder="Instagram"
                  name="instagram"
                  value={instagram}
                  onChange={onChange}
                />
              </Form.Group>
            </Row>
          </>
        ) : null}
        <Button  type="submit" value="Submit" variant="primary" block size="sm" className="mb-3">Submit</Button>
      </Form>
    </Container>
  );
};

CreateProfile.propTypes = {
  createProfile: PropTypes.func.isRequired,
};

export default connect (null,{createProfile})(CreateProfile);
