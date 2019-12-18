import axios from "axios";
import {GET_ERRORS} from './types';

export const updateVideo = (video_name) => async dispatch => {
    try {
      await axios({
        method: 'put',
        url: "http://localhost:8080/video/unset",
        headers: {}, 
        dataType: 'json',
        contentType: 'json',
        data: {
          name: video_name
        }
      });
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
