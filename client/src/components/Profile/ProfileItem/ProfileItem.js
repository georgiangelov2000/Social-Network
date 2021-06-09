import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Col, Row } from "react-bootstrap";

const ProfileItem = ({
  profile: {
    user: { _id, username, avatar },
    status,
    company,
    location,
    skills,
  },
}) => {
  return (
    <Row className="m-0">
      <Col className="m-auto" xs={3}>
        <ListGroup>
          <>
            <ListGroupItem className="text-center">
              <Avatar size="150" round={true} src={avatar} />
            </ListGroupItem>
            <ListGroupItem>
              <span>Name: </span>{" "}
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </ListGroupItem>
            <ListGroupItem>
              <span>Company: </span> {company}
            </ListGroupItem>
            <ListGroupItem>
              <span>Status: </span> {status}
            </ListGroupItem>
            <ListGroupItem>
              <span>Location: </span>
              {location}
            </ListGroupItem>
            <ListGroupItem>
              <Link to={`/profile/${_id}`}>View Profile</Link>
            </ListGroupItem>
            <ListGroupItem>
              <span>Skills :</span>
              <ul>
                {skills.slice(0, 4).map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </ListGroupItem>
          </>
        </ListGroup>
      </Col>
    </Row>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
