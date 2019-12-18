import React, { Component } from 'react';
import {Table, Button, Form, FormGroup, Container} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {getAllVideos} from "../actions/getVideosFromDb"
import VideoItem from './VideoItem';

class AvailableVideos extends Component {
  componentDidMount(){
    this.props.getAllVideos();
  }

  render() {
    const {videos} = this.props.videos
    let videoItems=[];
    const AvailableAlgo = videos => {
      if(videos.length < 1){
        return (
          <div className="alert alert-info text-center" role="alert">
            No videos in list.
          </div>
        )  
      } else {
       const vids = videos.map(video => (
         <VideoItem key={video.id} video={video}/>
       ));
       for(let i = 0; i < vids.length; i++) {
         if(vids[i].props.video.playList==="false") {
           videoItems.push(vids[i]);
         } 
       }
      }     
    };
    AvailableAlgo(videos);
    return(
      <Form>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>Available Videos</th>
                </tr>
                <tr>
                  <th>name</th>
                  <th>length</th>
                  <th>toPlaylist</th>
                  <th>delete</th>
                </tr>
            </thead>
            <tbody>
              {videoItems}
            </tbody>
            
        </Table>
        </Form>
    );
  }
}

AvailableVideos.propTypes = {
  getAllVideos: PropTypes.func.isRequired,
  videos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  videos: state.video
});

export default connect(mapStateToProps, {getAllVideos}) (AvailableVideos);