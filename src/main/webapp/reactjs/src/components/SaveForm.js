
import React, { Component } from 'react';
import {Form, Col, Button, Row} from 'react-bootstrap';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {addNewVideo} from "../actions/addNewVideo";
import classnames from "classnames";

class SaveForm extends Component {
  constructor(){
    super()
    this.state = {
      name: "",
      length: "",
      description: ""
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit(e){
    e.preventDefault()
    const newVideo = {
      name: this.state.name,
      length: this.state.length,
      description: this.state.description
    };
    // console.log(newVideo);
    this.props.addNewVideo(newVideo, this.props.history);
  } 

  render() { 
    return(
      <Form onSubmit={this.onSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Control 
                type="text" 
                placeholder="... video name ..." 
                name="name" value={this.state.name} 
                onChange={this.onChange}
              />
            </Col>
            <Col>
              <Form.Control 
                type="text" 
                placeholder="... video length ..." 
                name="length" 
                value={this.state.length} 
                onChange={this.onChange}
              />
            </Col>
          </Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              as="textarea" 
              rows="3" 
              placeholder="... video description ..." 
              name="description" 
              value={this.state.description} 
              onChange={this.onChange}
            />
          </Form.Group>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

SaveForm.propTypes = {
  addNewVideo: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired    
}

const mapStateToProps = state => ({
  errors: state.errors
})

export default connect(mapStateToProps, {addNewVideo}) (SaveForm);