import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import formatDate from "../../../utils/formatDate";
import { connect } from "react-redux";
import { Col, Card } from "react-bootstrap";
import Avatar from "react-avatar";
import { CalendarCheck } from "react-bootstrap-icons";

const PostItem = ({
  post: { _id, text, username, avatar, user, likes, comments, date },
}) => {
  return (
    <Col xs={6}>
      <Card>
        <Avatar className="m-auto" size="150" round={true} src={avatar} />
        <Card.Body>
          <Card.Title>
            {" "}
            <h4>{username.charAt(0).toUpperCase() + username.slice(1)}</h4>
          </Card.Title>
          <Card.Text>
            <p>
              {" "}
              <strong>Post: </strong>
              {text}
            </p>
            <span>
              <CalendarCheck />
            </span>
            <small> Posted on {formatDate(date)}</small>
            <div className="mt-3">
              <Link to={`/profile/${user}`}>Profile Details</Link>
            </div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on {formatDate(date)}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

export default PostItem;
