import React from "react";
import PropTypes from "prop-types";
import formatDate from "../../../utils/formatDate";
import { Row, Col, Card } from "react-bootstrap";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
  return (
    <Row className="w-50 m-auto">
      <Col xs={12}>
        <h5 className="m-auto">Education</h5>
      </Col>
      <Card className="m-auto w-100">
        <Col xs={12}>
          <strong className="text-dark">{school}: </strong>
          <small>
            <strong>
              {formatDate(from)} - {to ? formatDate(to) : "Now"}
            </strong>
          </small>
        </Col>
        <Col xs={12}>
          <strong>Degree:</strong> {degree}
        </Col>
        <Col xs={12}>
          <strong>Field of study:</strong> {fieldofstudy}
        </Col>
        <Col xs={12}>
          <strong>Description:</strong> {description}
        </Col>
      </Card>
    </Row>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
