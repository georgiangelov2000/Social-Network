import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfileById } from "../../../actions/profile";
import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileExperience from "../ProfileExperience/ProfileExperience";
import ProfileEducation from "../ProfileEducation/ProfileEducation";
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
        <Row className="my-1 m-0">
          <Col className="text-center mb-4">
            {auth.isAuthenticated && auth.user._id === profile.user._id && (
              <Link className="text-center" to={`/edit/profile`}>
                Edit Profile
              </Link>
            )}
            <ProfileDetails profile={profile} />
          </Col>
          <Col className="text-center mb-4" xs={12}>
            {profile.experience.length > 0 ? (
              <>
                {profile.experience.map((experience) => (
                  <ProfileExperience
                    key={experience._id}
                    experience={experience}
                  />
                ))}
              </>
            ) : (
              <h5>Experience details not found</h5>
            )}
          </Col>
          <Col className="text-center mb-4" xs={12}>
            {profile.education.length > 0 ? (
              <>
                {profile.education.map((education) => (
                  <ProfileEducation key={education._id} education={education} />
                ))}
              </>
            ) : (
              <h5>Education details not found</h5>
            )}
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
