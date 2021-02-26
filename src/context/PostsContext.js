import React, { createContext, useReducer, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { postsReducer, initialState, actions } from '../reducers/postsReducer'
import Http from '../libs/http'

export const PostsContext = createContext()
const { Provider } = PostsContext

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, initialState)
  const history = useHistory()

  useEffect(() => {
    getPosts()
  }, [])

  useEffect(() => {
    if (state.error) {
      const timeout = setTimeout(() => dispatch({ type: actions.CLEAR_ERROR }), 4000)
      return () => clearTimeout(timeout)
    }
  })

  const getPosts = async () => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const response = await Http.instance.get()

      const payload = { posts: response }
      dispatch({ type: actions.UPDATE_POSTS, payload })
    } catch (error) {
      setConnectionError()
    }
  }

  const createPost = async (body) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const createdPost = await Http.instance.post(body)
      const payload = { posts: [...state.posts, createdPost] }
      dispatch({ type: actions.UPDATE_POSTS, payload })
      history.push(`/posts/${createdPost.id}`)
    } catch (error) {
      setConnectionError()
    }
  }

  const updatePost = async (id, updates) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const updatedPost = await Http.instance.put(id, updates)
      const updatedPostIndex = state.posts
        .findIndex(post => post.id === updatedPost.id)

      const updatedPostList = [...state.posts]
      updatedPostList.splice(updatedPostIndex, 1, updatedPost)

      const payload = { posts: updatedPostList }
      dispatch({ type: actions.UPDATE_POSTS, payload })
      history.push(`/posts/${updatedPost.id}`)
    } catch (error) {
      setConnectionError()
    }
  }

  const deletePost = async (id) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      await Http.instance.delete(id)
      const deletedPostIndex = state.posts
        .findIndex(post => post.id === id)

      const updatedPostList = [...state.posts]
      updatedPostList.splice(deletedPostIndex, 1)

      const payload = { posts: updatedPostList }
      dispatch({ type: actions.UPDATE_POSTS, payload })
    } catch (error) {
      setConnectionError()
    }
  }

  const setConnectionError = () => {
    const payload = {
      error: 'There was an error in the network'
    }
    dispatch({ type: actions.SET_ERROR, payload })
  }

  const values = { ...state, createPost, updatePost, deletePost }

  return (
    <Provider value={values}>
      {children}
    </Provider>
  )
}
