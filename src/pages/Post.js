import React, { useState, useEffect, useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { Layout } from '../components/Layout'
import { PostDetails } from '../components/PostDetails'

const Post = ({ match, history }) => {
  const [currentPost, setCurrentPost] = useState(null)
  const { posts, isFetching, deletePost } = useContext(PostsContext)

  useEffect(() => {
    const postToShow = posts.find(post => post.id === parseInt(match.params.id))
    if (!postToShow) {
      setCurrentPost(null)
    } else {
      setCurrentPost(postToShow)
    }
  }, [posts])

  const handleEdit = () => {
    history.push(`/posts/edit/${currentPost.id}`, { currentPost })
  }

  const handleDelete = () => {
    deletePost(currentPost.id)
  }

  if (!currentPost) {
    return (
      <Layout title={`The post with id ${match.params.id} was not found.`} />
    )
  }

  return (
    <Layout
      isFetching={isFetching}
    >
      <PostDetails
        post={currentPost}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Layout>
  )
}

export default Post
