import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import style from "./ProfileItem.module.css";
import { FaCheck } from "react-icons/fa";
import { ListGroup, ListGroupItem, Col } from "react-bootstrap";
import { FaLocationArrow } from "react-icons/fa";

const ProfileItem = ({
  profile: {
    user: { _id, username, avatar },
    status,
    company,
    location,
    skills,
    img,
  },
}) => {
  return (
    <Col className="m-auto" xs={3}>
      <ListGroup className="mb-3 text-center ">
        <ListGroupItem className="text-center">
          <Avatar size="150" round={true} src={img} />
        </ListGroupItem>
        <ListGroupItem>
          <small>
            <strong>Name: </strong>
          </small>
          {username.charAt(0).toUpperCase() + username.slice(1)}
        </ListGroupItem>
        <ListGroupItem>
          <small>
            <strong>Company: </strong>
          </small>{" "}
          {company}
        </ListGroupItem>
        <ListGroupItem>
          <small>
            <strong>Status: </strong>
          </small>{" "}
          {status}
        </ListGroupItem>
        <ListGroupItem>
          <small>
            <strong>
              {" "}
              <FaLocationArrow /> Location:{" "}
            </strong>
          </small>
          {location}
        </ListGroupItem>
        <ListGroupItem>
          <Link to={`/profile/${_id}`}>View Profile</Link>
        </ListGroupItem>
        <ListGroupItem>
          <span className="text-center m-auto">Skills :</span>
          <ul className={style.list}>
            {skills.slice(0, 4).map((skill, index) => (
              <li key={index} className={style.itemList}>
                <small>
                  <strong>
                    <FaCheck />
                    {skill}
                  </strong>
                </small>
              </li>
            ))}
          </ul>
        </ListGroupItem>
      </ListGroup>
    </Col>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileItem;
