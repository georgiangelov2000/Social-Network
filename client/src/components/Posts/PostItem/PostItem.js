import React from "react";
import formatDate from "../../../utils/formatDate";
import { Col, Card, Button, Row } from "react-bootstrap";
import { CalendarCheck } from "react-bootstrap-icons";
import { deletePost, addLike, removeLike } from "../../../actions/post";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const PostItem = ({
  deletePost,
  addLike,
  removeLike,
  auth,
  showActions,
  post: { _id, text, username, user, likes, date },
}) => {
  return (
    <Col xs={12} className="mb-2">
      <Card>
        <Card.Body className="text-center">
          <Card.Title>
            {" "}
            <h4>{username.charAt(0).toUpperCase() + username.slice(1)}</h4>
          </Card.Title>
          <Card.Text>
            <div>
              {" "}
              <strong>Post: </strong>
              {text}
            </div>
            <span>
              <CalendarCheck />
            </span>
            <small> Posted on {formatDate(date)}</small>

            {showActions ? (
              <Row className="text-center">
                <Col xs={12}>
                  <Link to={`/profile/${user}`}>Profile Details</Link>
                </Col>

                <Col xs={12} className="mb-1">
                  <Link to={`/posts/${_id}`}>Discussion </Link>
                </Col>

                <Col xs={12}>
                  {user === auth.user._id ? (
                    <>
                      <Col>
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => deletePost(_id)}
                          className="mb-2"
                        >
                          Delete
                        </Button>
                      </Col>
                    </>
                  ) : null}
                </Col>

                {user === auth.user._id ? null : (
                  <>
                    <Col xs={12}>
                      <Button
                        variant="outline-success"
                        size="sm"
                        className="mb-2"
                        onClick={() => addLike(_id)}
                      >
                        <FaThumbsUp />
                      </Button>
                    </Col>

                    <Col xs={12}>
                      <Button
                        variant="outline-warning"
                        size="sm"
                        className="mb-2"
                        onClick={() => removeLike(_id)}
                      >
                        <FaThumbsDown />
                      </Button>
                    </Col>

                    <Col xs={12}>
                      <span>
                        {likes.length < 0 ? (
                          <>
                            <span>Likes: 0</span>
                          </>
                        ) : (
                          <span>Likes: {likes.length}</span>
                        )}
                      </span>
                    </Col>
                  </>
                )}
              </Row>
            ) : null}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Posted on {formatDate(date)}</small>
        </Card.Footer>
      </Card>
    </Col>
  );
};

PostItem.defaultProps = {
  showActions: true,
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
