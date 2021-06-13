import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col } from "react-bootstrap";

import { getProfileById } from "../../../actions/profile";

import ProfileDetails from "../ProfileDetails/ProfileDetails";
import ProfileExperience from "../ProfileExperience/ProfileExperience";
import ProfileEducation from "../ProfileEducation/ProfileEducation";


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
              <Link className="text-center" to={`/dashboard`}>
                Тhis is your profile
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
              null
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
              null
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
