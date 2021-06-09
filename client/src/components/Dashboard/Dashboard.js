import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { Container, Row, Col } from "react-bootstrap";
import DashExperience from "./DashExperience/DashExperience";
import DashEducation from './DashEducation/DashEducation';

const Dashboard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return profile === null ? (
    <p>Null</p>
  ) : (
    <Container>
      <Row>
        <Col className="text-center" xs={12}>
          <h1>Dashboard</h1>
          <h4>Welcome {user && user.username}</h4>
          {profile != null ? <p>Profile Details</p> : <p>Has not a profile</p>}
        </Col>
        <Col xs={12}>
          <DashExperience experience={profile.experience} />
        </Col>
        <Col xs={12}>
          <DashEducation education={profile.education} />
        </Col>
      </Row>
    </Container>
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
