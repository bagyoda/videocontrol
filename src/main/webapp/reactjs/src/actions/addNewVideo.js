import axios from "axios";

export const addNewVideo = (new_video, history) => async dispatch => {
    //await axios.post("http://localhost:8080/video/save", new_video)
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
};