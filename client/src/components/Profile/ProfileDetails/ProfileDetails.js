import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { Row, Col, ListGroupItem, ListGroup } from "react-bootstrap";
import { FaCheck } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaLocationArrow,
} from "react-icons/fa";

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
              <small>
                <strong>Name: </strong>
              </small>
              {username.charAt(0).toUpperCase() + username.slice(1)}
            </ListGroupItem>

            {website && (
              <ListGroupItem>
                <small>
                  <strong>Company: </strong>
                </small>
                {company}
              </ListGroupItem>
            )}

            <ListGroupItem>
              <small>
                <strong>Status: </strong>
              </small>{" "}
              {status}
            </ListGroupItem>

            {location && (
              <ListGroupItem>
                <small>
                  <strong>Location </strong>
                  <FaLocationArrow /> :{" "}
                </small>
                {location}
              </ListGroupItem>
            )}

            {website && (
              <ListGroupItem>
                <small>
                  <strong>Website: </strong>
                </small>
                <a href={website}>{website}</a>
              </ListGroupItem>
            )}

            {social && social.twitter && (
              <ListGroupItem>
                <small>
                  <strong>Twitter </strong>
                  <FaTwitter /> :{" "}
                </small>
                <a href={social.twitter}>{social.twitter}</a>
              </ListGroupItem>
            )}

            {social && social.facebook && (
              <ListGroupItem>
                <small>
                  <strong>Facebook </strong>
                  <FaFacebook /> :{" "}
                </small>
                <a href={social.facebook}>{social.facebook}</a>
              </ListGroupItem>
            )}

            {social && social.linkedin && (
              <ListGroupItem>
                <small>
                  <strong>Linkedin </strong>
                  <FaLinkedin /> :{" "}
                </small>
                <a href={social.linkedin}>{social.linkedin}</a>
              </ListGroupItem>
            )}

            {social && social.instagram && (
              <ListGroupItem>
                <small>
                  <strong>Instagram </strong>
                  <FaInstagram /> :{" "}
                </small>
                <a href={social.instagram}>{social.instagram}</a>
              </ListGroupItem>
            )}

            {bio && (
              <ListGroupItem>
                <small>
                  <strong>Bio: </strong>
                </small>
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
