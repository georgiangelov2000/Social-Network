import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { Table, Button } from "react-bootstrap";

const DashEducation = ({ education }) => {
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
          </tr>
        </thead>
        <tbody>
          {education.map((edu) => (
            <tr>
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

DashEducation.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default DashEducation;
