import React from "react";
import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {
  Instagram,
  Linkedin,
  Youtube,
  Facebook,
  Twitter,
} from "react-bootstrap-icons";

const SocialProfile = ({ profile: { social } }) => {
  return (
    <>
      <h2 className="text-center">Social Details</h2>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Instagram</th>
            <th>Linkedin</th>
            <th>Facebook</th>
            <th>Twitter</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {social.instagram ? (
              <td>
                <a href={social.instagram}>
                  <Instagram />
                  Instagram
                </a>
              </td>
            ) : (
              <td></td>
            )}

            {social.linkedin ? (
              <td>
                <a href={social.linkedin}>
                  <Linkedin /> Linkedin
                </a>
              </td>
            ) : (
              <td></td>
            )}

            {social.facebook ? (
              <td>
                <a href={social.facebook}>
                  <Facebook /> Facebook
                </a>
              </td>
            ) : (
              <td></td>
            )}

            {social.twitter ? (
              <td>
                <a href={social.twitter}>
                  <Twitter />  Twitter
                </a>
              </td>
            ) : (
              <td></td>
            )}
          </tr>
        </tbody>
      </Table>
    </>
  );
};

SocialProfile.propTypes = {
  social: PropTypes.array.isRequired,
};

export default SocialProfile;
