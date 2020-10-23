export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: null,
    savedAlbums: [],
    myTopArtists: [],
    selectedPlaylist: {}
};

const reducer = (state, action) => {
    console.log("action", action);

    // action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }
        case 'SET_SAVED_ALBUMS':
            return {
                ...state,
                savedAlbums: action.savedAlbums
            }
        case 'SET_MY_TOP_ARTISTS':
            return {
                ...state,
                myTopArtists: action.myTopArtists
            }
        case 'SELECTED_PLAYLIST':
            return {
                ...state,
                selectedPlaylist: action.selectedPlaylist
            }
        default:
            return state;
    }
}

export default reducer;