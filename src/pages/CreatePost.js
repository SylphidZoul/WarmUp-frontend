import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { Layout } from '../components/Layout'
import { PostForm } from '../components/PostForm'

const CreatePost = () => {
  const { isFetching, error, createPost } = useContext(PostsContext)

  return (
    <Layout
      isFetching={isFetching}
      error={error}
    >
      <PostForm
        formTitle='Create a post'
        onSubmit={(post) => createPost(post)}
      />
    </Layout>
  )
}

export default CreatePost
