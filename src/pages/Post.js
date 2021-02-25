import React from 'react'
import { Layout } from '../components/Layout'

const Post = ({ match }) => {
  return (
    <Layout title={`Post ${match.params.id}`}>
      Post
    </Layout>
  )
}

export default Post
