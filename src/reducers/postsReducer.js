export const initialState = {
  posts: [],
  isFetching: true,
  error: ''
}

export const actions = {
  FETCH_DATA: 'FETCH_DATA',
  UPDATE_POSTS: 'UPDATE_POSTS',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR'
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        isFetching: true
      }
    case 'UPDATE_POSTS':
      return {
        ...state,
        posts: action.payload.posts,
        isFetching: false
      }
    case 'SET_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.payload.error
      }
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: ''
      }
    default:
      return state
  }
}
