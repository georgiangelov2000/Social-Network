import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteExperience } from "../../../actions/profile";
import { connect } from "react-redux";
import { Table, Button } from "react-bootstrap";

import {Building,GeoAltFill,CalendarCheck} from "react-bootstrap-icons"

const DashExperience = ({ experience, deleteExperience }) => {
  return (
    <>
      <h4 className="text-center mt-3">Experience Details</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th><Building />  
            <small className="ml-1">
              <strong>
               Company
              </strong>
            </small>
            </th>
            <th>
            <small className="ml-1">
              <strong>
               Title
              </strong>
            </small>
            </th>
            <th>
            <GeoAltFill />
            <small className="ml-1">
              <strong>
               Location
              </strong>
            </small>
            </th>
            <th><CalendarCheck />
            <small className="ml-1">
              <strong>
                Years
              </strong>
            </small>
            </th>
            <th>
            <small className="ml-1">
              <strong>
                Action
              </strong>
            </small>
            </th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => (
            <tr key={exp._id}>
              <td> {exp.company}</td>
              <td>{exp.title}</td>
              <td>{exp.location}</td>
              <td>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment>-
                {exp.to === null ? (
                  "Now"
                ) : (
                  <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                )}
              </td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => deleteExperience(exp._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

DashExperience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(DashExperience);
