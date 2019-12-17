import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {getAllVideos} from "../actions/addNewVideo"

class PlayList extends Component {
  componentDidMount(){
    this.props.getAllVideos();
  }
  render() {
    return(
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Playlist</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>Mark</td>
                </tr>
                <tr>
                <td>2</td>
                <td>Jacob</td>
                </tr>
                <tr>
                <td>3</td>
                <td colSpan="2">Larry the Bird</td>
                </tr>
            </tbody>
        </Table>
    );
  }
}

PlayList.propTypes = {
  getAllVideos: PropTypes.func.isRequired,
  videos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  videos: state.video
});

export default connect(mapStateToProps, {getAllVideos}) (PlayList);