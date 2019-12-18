import axios from "axios";
import {GET_ERRORS,DELETE_VIDEO} from './types';

export const deleteVideo = video_id => async dispatch => {
  if (window.confirm(`Are you sure to delete ${video_id} ?`)) {
      /*await axios.delete(`http://localhost:8080/video/delete/${video_id}`);*/
      try {
        await axios({
          method: 'delete',
          url: `http://localhost:8080/video/delete`,
          headers: {}, 
          dataType: 'json',
          contentType: 'json',
          data: {
            id: video_id
          }
        });
          dispatch({
          type:DELETE_VIDEO,
          payload:video_id
        });  
      } catch (error) {
        dispatch({
          type:GET_ERRORS,
          payload:error.response
        })
        console.log(error.response.data); 
      }
            
  }   
};