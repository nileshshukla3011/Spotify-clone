import React from 'react'
import { reducerCases } from './Constants';

const reducer = (state, action) => {
    switch (action.type) {
        case reducerCases.SET_TOKEN:{
            return {
                ...state,
                token: action.token,
            }
        }
        case reducerCases.SET_PLAYLISTS:{
            return {
                ...state,
                playlists: action.playlists,
            }
        }
        case reducerCases.SET_USER:{
            return {
                ...state,
                userInfo : action.userInfo,
            }
        }

        case reducerCases.SET_PLAYLIST :{
            return {
                ...state,
                selectedPlaylist : action.selectedPlaylist,
            }
        }

        case reducerCases.SET_PLAYING: {
            return{
                ...state,
                currentlyPlaying: action.currentlyPlaying,
            }
        }
        default: return state;
    }
}

export default reducer;

export const initialState = {
    token: null,
    playlists: [],
    userInfo: null,
    selectedPlaylistId: "50SRCSrvOV1q2zW0cdyupP",
    selectedPlaylist: null,
    currentlyPlaying: null,
}