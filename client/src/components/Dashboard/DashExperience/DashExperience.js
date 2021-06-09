import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Table, Button } from "react-bootstrap";

const DashExperience = ({ experience }) => {
  return (
    <>
      <h2 className="text-center">Experience Details</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Location</th>
            <th>Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {experience.map((exp) => (
            <tr>
              <td>{exp.company}</td>
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
                <Button size="sm" variant="danger">
                  Danger
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
};

export default DashExperience;

/*
<td>
  <Moment format="YYYY/MM/DD">{exp.from}</Moment>-
  {exp.to === null ? "Now" : <Moment format="YYYY/MM/DD">{exp.to}</Moment>}
</td>;
*/
