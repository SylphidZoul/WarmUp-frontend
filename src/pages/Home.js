import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { Layout } from '../components/Layout'
import { PostsList } from '../components/PostsList'

const Home = () => {
  const { posts, isFetching, error, deletePost } = useContext(PostsContext)

  return (
    <Layout
      title='All posts'
      isFetching={isFetching}
      error={error}
    >
      <PostsList
        posts={posts}
        onDelete={deletePost}
      />
    </Layout>
  )
}

export default Home
