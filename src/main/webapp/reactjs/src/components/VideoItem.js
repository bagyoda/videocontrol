import React, { Component } from "react";
import {deleteVideo} from "../actions/deleteVideo";
import {connect} from 'react-redux';
import PropTypes from "prop-types";

class VideoItem extends Component {
  onDeleteClick(video_id){
    this.props.deleteVideo(video_id);
  }

  render() {
    const {video} = this.props 
    return (
            <tr> 
              <td>{video.name}</td>
              <td>{video.length}</td>
              <td>
                <button className="btn btn-info">
                  add
                </button>
              </td>
              <td>
                <button className="btn btn-danger" onClick={this.onDeleteClick.bind(this, video.id)}
                  >delete
                </button>
                </td>
            </tr>
    );
  }
}

VideoItem.propTypes = {
  deleteVideo: PropTypes.func.isRequired
};

export default connect(null, {deleteVideo}) (VideoItem);