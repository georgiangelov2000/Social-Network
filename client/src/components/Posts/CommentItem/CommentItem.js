import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../../utils/formatDate";
import { Col, Card } from "react-bootstrap";

const CommentItem = ({
  postId,
  comment: { _id, text, username, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <>
    <Col xs={12} className="mb-2 text-center">
      <Card>
        <Link to={`/profile/${user}`}>
          <Card.Title>
            User: {username.charAt(0).toUpperCase() + username.slice(1)}
          </Card.Title>
        </Link>
        <Card.Text className="my-1">
          {" "}
          <small>Comment:</small> {text}
        </Card.Text>
        <Card.Text className="post-date">
          <small>Posted on:</small> {formatDate(date)}
        </Card.Text>
      </Card>
    </Col>
  </>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(CommentItem);
