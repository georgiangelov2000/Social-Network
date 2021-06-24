import React,{useEffect,useRef} from "react";
import { Form, Col } from "react-bootstrap";
import { filterPosts , clearFilter} from "../../../actions/post";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FilterPosts = ({ filterPosts,clearFilter, post:{filtered} }) => {
    const text=useRef("");

    useEffect(() => {
        if(filtered===null){
            text.current.value ="";
        }
    })

    const onChange= (e)=>{
        if(text.current.value !== "") {
            filterPosts(e.target.value)
        }else{
            clearFilter();
        }
    }

  return (
    <Col xs={9} className="m-auto">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Control 
          size="sm" 
          type="text" 
          placeholder="Enter username..." 
          ref={text}
          onChange={onChange}
          />
        </Form.Group>
      </Form>
    </Col>
  );
};

FilterPosts.propTypes = {
    post: PropTypes.object.isRequired,
  };

const mapStateToProps = (state) => ({
    post:state.post
})

export default connect(mapStateToProps,{ filterPosts, clearFilter })(FilterPosts);
