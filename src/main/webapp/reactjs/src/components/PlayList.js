import React, { Component } from 'react';
import {Table, Button, Form} from 'react-bootstrap';
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import {getAllVideos} from "../actions/getVideosFromDb"
import PlayListItem from "./PlayListItem"

class PlayList extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    this.props.getAllVideos();
  }
  render() {
    const {videos} = this.props.videos

    let videoItems=[];

    const PlayListAlgo = videos => {
      if(videos.length < 1){
        return (
          <div className="alert alert-info text-center" role="alert">
            No videos in list.
          </div>
        )  
      } else {
       const vids = videos.map(video => (
         <PlayListItem key={video.id} video={video}/>
       ));
       
       for(let i = 0; i < vids.length; i++) {
         if(vids[i].props.video.playList==="true") {
           videoItems.push(vids[i]);
         } 
       }
      }     
    };

    PlayListAlgo(videos);

    return(
      <Form>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                  <th>Playlist</th>
                </tr>
                <tr>
                  <th>name</th>
                  <th>length</th>
                  <th>remove</th>
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

PlayList.propTypes = {
  getAllVideos: PropTypes.func.isRequired,
  videos: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  videos: state.video
});

export default connect(mapStateToProps, {getAllVideos}) (PlayList);