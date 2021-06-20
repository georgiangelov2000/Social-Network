import React, { useEffect } from "react";
import PropTypes from "prop-types";

import PostItem from "../PostItem/PostItem";
import CommentForm from "../CommentForm/CommentForm";
import CommentItem from "../CommentItem/CommentItem";

import { Row, Container, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getPost } from "../../../actions/post";

const Post = ({ getPost, post: { post }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  }, [getPost, match.params.id]);

  return post === null ? (
    <span>Post not found</span>
  ) : (
    <Container>
      <Row>
        <Col className="mt-5">
          <PostItem post={post} showActions={false} />
          <CommentForm postId={post._id} />
        </Col>
      </Row>
    </Container>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPost })(Post);
