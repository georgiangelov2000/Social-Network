import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";

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
    <>
      <h1>Dashboard</h1>
      <p>Welcome {user && user.username}</p>
      {profile != null ? <>Has a profile</> : <>has not a profile</>}
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
