import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Alert = ({ alerts }) =>
  alerts.map((alert) => (
    <div key={alert.id} className="text-danger mt-1 text-center" >
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect (mapStateToProps)(Alert);

