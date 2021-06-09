import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../../actions/profile";
import ProfileTop from "../ProfileTop/ProfileTop";
import { Row, Col } from "react-bootstrap";

const CurrentProfile = ({
  getProfileById,
  profile: { profile },
  auth,
  match,
}) => {
  useEffect(() => {
    getProfileById(match.params.id);
  }, [getProfileById, match.params.id]);

  return (
    <>
      {profile === null ? (
        <p>Profile not found</p>
      ) : (
        <Row className="my-5 m-0">
          <Col className="text-center">
            {auth.isAuthenticated && auth.user._id === profile.user._id && (
              <Link className="text-center" to={`/edit/profile`}>Edit Profile</Link>
            )}
            <ProfileTop profile={profile} />
          </Col>
        </Row>
      )}
    </>
  );
};

CurrentProfile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(CurrentProfile);
