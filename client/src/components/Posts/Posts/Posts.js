import React, { useEffect } from "react";
import PropTypes from "prop-types";

import PostItem from "../PostItem/PostItem";
import PostForm from "../PostForm/PostForm";

import { connect } from "react-redux";
import { getPosts } from "../../../actions/post";
import { Container } from "react-bootstrap";

import { Chat } from "react-bootstrap-icons";

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container>
      <h1 className="text-center">Posts</h1>
      <p className="text-center">
        {" "}
        <Chat /> Welcome to community
      </p>
      <PostForm />
      <div className="posts">
        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    </Container>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
