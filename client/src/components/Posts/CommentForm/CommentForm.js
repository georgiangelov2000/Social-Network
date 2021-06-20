import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addComment } from "../../../actions/post";
import { Form, Button } from "react-bootstrap";

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, { text });
    setText("");
  };

  const onChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  return (
    <>
      <h5 className="text-primary text-center">Create comment</h5>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Control
            size="sm"
            as="textarea"
            placeholder="Create comment"
            rows={3}
            name="text"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Text className="text-muted">Write something</Form.Text>
        <Button type="submit" value="Submit" variant="primary" block size="sm">
          Create Comment
        </Button>
      </Form>
    </>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default connect(null, { addComment })(CommentForm);
