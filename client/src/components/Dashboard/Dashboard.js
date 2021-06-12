import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Container, Row, Col } from "react-bootstrap";

import DashExperience from "./DashExperience/DashExperience";
import DashEducation from "./DashEducation/DashEducation";
import SocialProfile from "./SocialProfile/SocialProfile";

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>
      {profile !== null ? (
        <Container>
          <Row>
            <Col className="text-center mb-3" xs={12}>
              <h1>Dashboard</h1>
            </Col>
            <Col
              xs={12}
              className="d-flex justify-content-around bg-secondary p-2"
            >
              <Link className="text-white" to="/edit-profile">
                Edit profile
              </Link>

              <Link className="text-white" to="/create-profile">
                Create profile
              </Link>

              <Link className="text-white" to="/add-experience">
                Add experience
              </Link>

              <Link className="text-white" to="/add-education">
                Add education
              </Link>
            </Col>
            <Col xs={12}>
              <DashExperience experience={profile.experience} />
            </Col>
            <Col xs={12}>
              <DashEducation education={profile.education} />
            </Col>
            <Col>
              <SocialProfile profile={profile} />
            </Col>
          </Row>
        </Container>
      ) : (
        <Container>
          <Row>
            <Col className="text-center" xs={12}>
              <h1>Dashboard</h1>
              <h5>Please go to add profile information...</h5>
              <Col
                xs={12}
                className="d-flex justify-content-around bg-secondary p-2 mb-2"
              >
                <Link className="text-white" to="/create-profile">
                  Create profile
                </Link>
                <Link className="text-white" to="/add-experience">
                  Add experience
                </Link>
                <Link className="text-white" to="/add-education">
                  Add education
                </Link>
              </Col>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
