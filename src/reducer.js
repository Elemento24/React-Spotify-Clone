export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove when Hosting the web-app, just a shortcut for Logging in
  token: 'BQCTNsSGXAqfKkCFq2RSe1H3a74wWwRIXvDWm_QypZJQaolzkvVsxylXpdVJaFSVMV9fd3_q1RV8HWJ3XWU0Vpxw05oS9VHnOpfVhQTrOcR4KZGXqA0jR-ENAiy9GTUdHCug7VVnqxTVk2STMtqLRORDEfIyVqQ5j_dvEANadNUExYFkRAAz'
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
      }
    default:
      return state;
  }
}

export default reducer;