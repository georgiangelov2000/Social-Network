import React from "react";
import Profiles from "../Profile/Profiles/Profiles";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <div className="text-center m-0 mt-2 ">
      <Col xs={12} className="mb-2" >
        <h1>Social Network Group</h1>
        <small>
          <strong>
            CREATE YOUR PORTFOLIO, CONNECT WITH OTHER DEVELOPERS AND START A
            JOINT BUSINESS!
          </strong>
        </small>
      </Col>
      <Profiles />
    </div>
  );
};

export default Home;
