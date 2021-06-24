import React, { useEffect } from "react";
import PropTypes from "prop-types";

import PostItem from "../PostItem/PostItem";
import PostForm from "../PostForm/PostForm";
import FilterPosts from "../FilterPosts/FilterPosts";

import { connect } from "react-redux";
import { getPosts } from "../../../actions/post";
import { Container } from "react-bootstrap";

import Alert from "../../Alert/Alert";

import { Row } from "react-bootstrap";
import { Chat } from "react-bootstrap-icons";

const Posts = ({ getPosts, post: { posts, filtered } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <Container>
      <Alert />
      <h1 className="text-center">Posts</h1>
      <p className="text-center">
        {" "}
        <Chat /> Welcome to community
      </p>
      <FilterPosts />
      <PostForm />

      <Row>
        {posts !== null ? (
          <>
            {filtered !== null
              ? filtered.map((post) => (
                  <PostItem key={post._id} post={post} />
                ))
              : posts.map((post) => <PostItem key={post._id} post={post} />)}
          </>
        ) : null}
      </Row>
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

/*

        {posts.map((post) => (
          <PostItem key={post._id} post={post} />
        ))}
        */
