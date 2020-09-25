export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token: null
  // Remove when Hosting the web-app, just a shortcut for Logging in
  // token: 'BQCTNsSGXAqfKkCFq2RSe1H3a74wWwRIXvDWm_QypZJQaolzkvVsxylXpdVJaFSVMV9fd3_q1RV8HWJ3XWU0Vpxw05oS9VHnOpfVhQTrOcR4KZGXqA0jR-ENAiy9GTUdHCug7VVnqxTVk2STMtqLRORDEfIyVqQ5j_dvEANadNUExYFkRAAz'
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      };

    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token
      };

    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists
      };

    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly
      }

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };

    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    default:
      return state;
  }
}

export default reducer;