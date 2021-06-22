import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { Row, Col, ListGroupItem, ListGroup } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";

const ProfileDetails = ({
  profile: {
    user: { username, avatar },
    status,
    company,
    location,
    website,
    social,
    bio,
    skills,
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
                <span>Twitter: </span>
                <a href={social.twitter}>{social.twitter}</a>
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
                <span>Linkedin: </span>
                <a href={social.linkedin}>{social.linkedin}</a>
              </ListGroupItem>
            )}

            {social && social.instagram && (
              <ListGroupItem>
                <span>Instagram: </span>
                <a href={social.instagram}>{social.instagram}</a>
              </ListGroupItem>
            )}

            {bio && (
              <ListGroupItem>
                <span>Bio: </span>
                {bio}
              </ListGroupItem>
            )}

            {skills && (
              <ListGroupItem>
                <div>
                  <h5>Skills: </h5>
                  {skills.map((skill, index) => (
                    <span key={index}>
                      <small>
                        <FaCheck />
                        {skill}
                      </small>
                    </span>
                  ))}
                </div>
              </ListGroupItem>
            )}
          </>
        </ListGroup>
      </Col>
    </Row>
  );
};

ProfileDetails.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileDetails;
