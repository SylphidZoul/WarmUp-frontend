import React from 'react'
import { Article, H1, Span, Hr, P } from './styles'
import { PostButtons } from '../PostButtons'
import PropTypes from 'prop-types'

export const PostDetails = ({ post, onEdit, onDelete }) => {
  return (
    <Article>
      <H1>
        {post.title}
      </H1>
      <Span>
        User {post.userId}
      </Span>
      <Hr />
      <P>
        {post.body}
      </P>
      <Hr />
      <PostButtons
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </Article>
  )
}

PostDetails.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
  }),
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}
