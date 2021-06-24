import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../../actions/post";
import { Form, Button } from "react-bootstrap";

const PostForm = ({ addPost }) => {
  const [text, setText] = useState("");

  const onSumbit = (e) => {
    e.preventDefault();
    addPost({ text });
    setText("");
  };

  return (
    <>
      <h6>Say something</h6>
      <Form onSubmit={onSumbit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
          <Form.Control
            size="sm"
            as="textarea"
            name="text"
            placeholder="Text"
            value={text}
            rows={3}
            onChange={(e) => setText(e.target.value)}
          />
        </Form.Group>
        <Button
          type="submit"
          value="Submit"
          variant="primary"
          block
          size="sm"
          className="mb-3"
        >
          Submit
        </Button>
      </Form>
    </>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(PostForm);
