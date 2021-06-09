import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { Row, Col, ListGroupItem, ListGroup } from "react-bootstrap";


const ProfileTop = ({
  profile: {
    user: { username, avatar },
    status,
    company,
    location,
    website,
    social,
  },
}) => {
  return (
    <Row className="m-0">
      <Col xs={6} className="mx-auto">
        <ListGroup>
          <>
            <ListGroupItem className="text-center">
              <Avatar size="150" round={true} src={avatar} />
            </ListGroupItem>

            <ListGroupItem>
              <span>Name: </span>
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </ListGroupItem>

            {website && (
              <ListGroupItem>
                <span>Company: </span> {company}
              </ListGroupItem>
            )}

            <ListGroupItem>
              <span>Status: </span> {status}
            </ListGroupItem>

            {location && (
              <ListGroupItem>
                <span>Location: </span>
                {location}
              </ListGroupItem>
            )}

            {website && (
              <ListGroupItem>
                <span>Website: </span>
                <a href={website}>{website}</a>
              </ListGroupItem>
            )}

            {social && social.twitter && (
              <ListGroupItem>
                <a href={social.twitter}>Twitter</a>
              </ListGroupItem>
            )}

            {social && social.facebook && (
              <ListGroupItem>
                <span>Facebook: </span>
                <a href={social.facebook}>{social.facebook}</a>
              </ListGroupItem>
            )}

            {social && social.linkedin && (
              <ListGroupItem>
                <a href={social.linkedin}>Linkedin</a>
              </ListGroupItem>
            )}

            {social && social.instagram && (
              <ListGroupItem>
                <span>Instagram: </span>
                <a href={social.instagram}>{social.instagram}</a>
              </ListGroupItem>
            )}
          </>
        </ListGroup>
      </Col>
    </Row>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
