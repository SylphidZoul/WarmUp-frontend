import React from 'react'
import { PostCard } from '../PostCard'
import { ListWrapper } from './styles'
import PropTypes from 'prop-types'

export const PostsList = ({ posts, onDelete }) => {
  return (
    <ListWrapper>
      {posts.map(post => (
        <PostCard
          key={post.id}
          postData={post}
          onDelete={onDelete}
        />
      ))}
    </ListWrapper>
  )
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })),
  onDelete: PropTypes.func.isRequired
}
