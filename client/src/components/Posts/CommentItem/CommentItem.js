import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import formatDate from "../../../utils/formatDate";
import { Button } from "react-bootstrap";

const CommentItem = ({
  postId,
  comment: { _id, text, username, avatar, user, date },
  auth,
}) => {
  return (
    <>
      <h5>{username}</h5>
      <Link to={`/profile/${user}`}>Profile</Link>
      <div>
        <p>{text}</p>
        <p className="post-date">Posted on {formatDate(date)}</p>
        {user === auth.user._id ? (
          <Button variant="Danger" size="sm">
            Delete
          </Button>
        ) : null}
      </div>
    </>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(null,mapStateToProps)(CommentItem);
