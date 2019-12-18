import axios from "axios";
import {GET_ERRORS, GET_VIDEOS} from './types';

export const getAllVideos = () => async dispatch => {
    //const res = await axios.get("http://localhost:8080/videos")
    const res = await axios ({
      url: 'http://localhost:8080/videos',
      method: 'get'
    })
    dispatch({
      type:GET_VIDEOS,
      payload:res.data
    });
  }