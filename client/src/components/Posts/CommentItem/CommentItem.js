import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../../utils/formatDate";
import { Col, Card, Button } from "react-bootstrap";
import { deleteComment } from "../../../actions/post";

const CommentItem = ({
  postId,
  comment: { _id, text, username, avatar, user, date },
  auth,
  deleteComment,
}) => (
  <>
    <Col xs={12} className="mb-2 text-center">
      <Card>
        <Card.Body>
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
          {user === auth.user._id ? (
            <Button
              variant="outline-danger"
              size="sm"
              className=" mx-auto w-25 m-auto"
              onClick={(e) => deleteComment(postId, _id)}
            >
              Delete
            </Button>
          ) : null}
        </Card.Body>
      </Card>
    </Col>
  </>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
