import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProfiles } from "../../../actions/profile";

import FilterProfiles from "../FilterProfiles/FilterProfiles";
import ProfileItem from "../ProfileItem/ProfileItem";
import { Row } from "react-bootstrap";

import Spinner from "../../Spinner/Spinner";

const Profiles = ({
  getProfiles,
  profile: { profiles, loading, filtered },
}) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      <h5 className="text-center mt-2">Developers</h5>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <FilterProfiles />
          <Row xs={1} md={3} className="m-0 g-4">
          {profiles !== null ? (
            <>
              {filtered !== null
                ? filtered.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))
                : profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))}
            </>
          ) : (
            null
          )}
          </Row>
        </>
      )}
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  // filtered: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);

/*
{profiles.length > 0 ? (
  profiles.map((profile) => (
    <ProfileItem key={profile._id} profile={profile} />
  ))
) : ( 
  <h5 className="m-auto text-center text-primary">No profiles found...</h5>
)}

{profiles !== null ? (
              <>
                {filtered !== null
                  ? filtered.map((profile) => (
                      <ProfileItem key={profile._id} profile={profile} />
                    ))
                  : profiles.map((profile) => (
                      <ProfileItem key={profile._id} profile={profile} />
                    ))}
              </>
            ) : null}

*/
