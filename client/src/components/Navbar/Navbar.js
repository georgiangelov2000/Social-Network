import React from "react";
import { Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ isAuthenticated, logout, auth: { user } }) => {
  const authLinks = (
    <>
      <Nav className="bg-dark">
        <Nav.Item className="d-flex justify-content-center">
          <Button size="sm" onClick={logout} variant="link">
            Logout
          </Button>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/">
            <Nav.Link className="text-white">Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/profiles">
            <Nav.Link className="text-white">Developers</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/dashboard">
            <Nav.Link className="text-white">Dashboard</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/posts">
            <Nav.Link className="text-white">Posts</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item>
          <LinkContainer to="/dashboard">
            <Nav.Link className="text-white">
              Welcome {user && user.username.charAt(0).toUpperCase() + user.username.slice(1)}
            </Nav.Link>
          </LinkContainer>
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
          <LinkContainer to="/profiles">
            <Nav.Link className="text-white">Developers</Nav.Link>
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
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
