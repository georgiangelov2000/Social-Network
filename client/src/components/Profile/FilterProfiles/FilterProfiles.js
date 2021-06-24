import React, { useRef, useEffect } from "react";
import { filterProfiles, clearFilter } from "../../../actions/profile";
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { Form, Col } from "react-bootstrap";

const FilterProfiles = ({ filterProfiles, clearFilter, profile: { filtered } }) => {
  const text = useRef("");

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterProfiles(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Col xs={9} className="m-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control
            size="sm"
            ref={text}
            type="text"
            placeholder="Enter profile..."
            onChange={onChange}
          />
        </Form.Group>
      </Form>
    </Col>
  );
};

FilterProfiles.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps, { filterProfiles, clearFilter })(
  FilterProfiles
);
