import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../../actions/profile";
import ProfileItem from "../ProfileItem/ProfileItem";

const Profiles = ({ getProfiles, profile: { profiles } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      <h1 className="text-center">Developers</h1>
      {profiles.length > 0 ? (
        profiles.map((profile) => (
          <ProfileItem key={profile._id} profile={profile} />
        ))
      ) : (
        <h5>No profiles found...</h5>
      )}
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
