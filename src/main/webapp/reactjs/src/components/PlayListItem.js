import React, { Component } from "react";
import PropTypes from "prop-types";
import {updateVideo} from "../actions/updateVideo";
import {connect} from 'react-redux';

class PlayListItem extends Component {

    onRemove(video_name){
        this.props.updateVideo(video_name);
      }

  render() {
    const {video} = this.props 
    return (
        <tr> 
            <td>{video.name}</td>
            <td>{video.length}</td>
            <td>
            <button className="btn btn-primary" onClick={this.onRemove.bind(this, video.name)}>
                remove
            </button>
            </td>
        </tr>
    );
  }
}

PlayListItem.propTypes = {
  updateVideo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    videos: state.video
  });

  export default connect(mapStateToProps, {updateVideo}) (PlayListItem);