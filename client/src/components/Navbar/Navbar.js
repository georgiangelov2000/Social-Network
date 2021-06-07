import React from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <>
      <Nav className="bg-dark">
        <Nav.Item>
          <Button size="sm" onClick={logout}>Logout</Button>
        </Nav.Item>
      </Nav>
    </>
  );

  const guestLinks = (
    <>
      <Nav className="bg-dark">
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link className="text-white">Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/register">
            <Nav.Link className="text-white">Register</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/login">
            <Nav.Link className="text-white">Login</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </>
  );

  return <> {isAuthenticated ? authLinks : guestLinks} </>;
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);