import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { Layout } from '../components/Layout'
import { PostForm } from '../components/PostForm'

const EditPost = ({ location, match }) => {
  const { isFetching, error, updatePost } = useContext(PostsContext)

  const handleEdit = (changes) => {
    const updates = { ...location.state.currentPost, ...changes }
    updatePost(match.params.id, updates)
  }

  if (!location.state) {
    return (
      <Layout title={`The post with id ${match.params.id} was not found o cannot be edited.`} />
    )
  }

  return (
    <Layout
      isFetching={isFetching}
      error={error}
    >
      <PostForm
        formTitle={`Editing post ${match.params.id}`}
        onSubmit={handleEdit}
        postToEdit={location.state.currentPost}
      />
    </Layout>
  )
}

export default EditPost
