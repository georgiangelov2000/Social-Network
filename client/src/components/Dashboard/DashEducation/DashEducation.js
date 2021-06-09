import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteEducation } from "../../../actions/profile";
import { Table, Button } from "react-bootstrap";
import { connect } from "react-redux";

const DashEducation = ({ education, deleteEducation }) => {
  return (
    <>
      <h2 className="text-center">Education Details</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Field of study</th>
            <th>Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {education.map((edu) => (
            <tr key={edu._id}>
              <td>{edu.school}</td>
              <td>{edu.degree}</td>
              <td>{edu.fieldofstudy}</td>
              <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment>-
                {edu.to === null ? (
                  "Now"
                ) : (
                  <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                )}
              </td>
              <td>
                <Button
                  onClick={() => deleteEducation(edu._id)}
                  size="sm"
                  variant="danger"
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

DashEducation.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null,{deleteEducation})(DashEducation);
