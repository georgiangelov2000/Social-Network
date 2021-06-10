import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PropTypes from "prop-types";
import formatDate from "../../../utils/formatDate";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <Row className="w-50 m-auto">
      <h5 className="m-auto">Experience</h5>
      <Card>
        <Col xs={12}>
          <strong className="text-dark">Company: </strong>
          {company} :{" "}
          <small>
            <strong>
              {formatDate(from)} - {to ? formatDate(to) : "Now"}
            </strong>
          </small>
        </Col>
        <Col xs={12}>
          <strong>Position: </strong> {title}
        </Col>
        <Col xs={12}>
          <strong>Location: </strong> {location}
        </Col>
        <Col xs={12}>
          <strong>Description: </strong> {description}
        </Col>
      </Card>
    </Row>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
