import React from "react";
import { Table } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  Instagram,
  Linkedin,
  // Youtube,
  Facebook,
  Twitter,
} from "react-bootstrap-icons";

const SocialProfile = ({ profile: { social } }) => {
  return (
    <>
      <h4 className="text-center">Social Details</h4>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th><Instagram />
            <small className="ml-1">
              <strong>
               Instagram
              </strong>
            </small>
            </th>
            <th><Linkedin />
            <small className="ml-1">
              <strong>
               Linkedin
              </strong>
            </small>
            </th>
            <th><Facebook />
            <small className="ml-1">
              <strong>
               Facebook
              </strong>
            </small>
            </th>
            <th><Twitter />
            <small className="ml-1">
              <strong>
               Twitter
              </strong>
            </small>
            </th>
          </tr>
        </thead>
        <tbody>
          {social ? (
            <tr>
              {social.instagram ? (
                <td>  
                  <a href={social.instagram}> Instagram</a>
                </td>
              ) : (
                <td></td>
              )}

              {social.linkedin ? (
                <td>
                  <a href={social.linkedin}> Linkedin</a>
                </td>
              ) : (
                <td></td>
              )}

              {social.facebook ? (
                <td>
                  <a href={social.facebook}> Facebook</a>
                </td>
              ) : (
                <td></td>
              )}

              {social.twitter ? (
                <td>
                  <a href={social.twitter}>Twitter</a>
                </td>
              ) : (
                <td></td>
              )}
            </tr>
          ) : null}
        </tbody>
      </Table>
    </>
  );
};

SocialProfile.propTypes = {
  social: PropTypes.array.isRequired,
};

export default SocialProfile;
