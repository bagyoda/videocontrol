import axios from "axios";
import {GET_ERRORS, GET_VIDEOS} from './types';

export const addNewVideo = (new_video, history) => async dispatch => {
    //await axios.post("http://localhost:8080/video/save", new_video)
    try {
      await axios({
        method: 'post',
        url: "http://localhost:8080/video/save",
        headers: {}, 
        dataType: 'json',
        contentType: 'json',
        data: {
          name: new_video.name,
          length: new_video.length,
          description: new_video.description
        }
      });
      history.push("/");
      dispatch({
        type:GET_ERRORS,
        payload:{}
      })
    } catch (error) {
      dispatch({
        type:GET_ERRORS,
        payload:error.response.data 
      })
      console.log(error.response.data);
    }    
};

export const getAllVideos = () => async dispatch => {
  const res = await axios.get("http://localhost:8080/videos")
  dispatch({
    type:GET_VIDEOS,
    payload:res.data
  })
}
