import {GET_VIDEOS, DELETE_VIDEO, UPDATE_VIDEO} from '../actions/types';

const initialState = {
    videos: []
}

export default function (state=initialState, action) {
    switch(action.type) {

        case GET_VIDEOS:
            return{
                ...state,
                videos:action.payload
            };  

        case UPDATE_VIDEO:
            return{
                ...state,
                videos: state.videos.filter(
                video => video.name === action.payload
            )    
            }

        case DELETE_VIDEO:
        return{
            ...state,
            videos: state.videos.filter(
                video => video.id !== action.payload
            )
        };  

        default:
            return state;
    }
}