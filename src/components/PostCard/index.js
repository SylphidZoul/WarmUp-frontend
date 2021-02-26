import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, TitleDiv, H3 } from './styles'
import { PostButtons } from '../PostButtons/index'
import PropTypes from 'prop-types'

export const PostCard = ({ postData, onDelete }) => {
  const history = useHistory()

  const handleEdit = () => {
    history.push(`/posts/edit/${postData.id}`, { currentPost: postData })
  }

  const handleDelete = () => {
    onDelete(postData.id)
  }

  return (
    <Card>
      <TitleDiv>
        <H3>
          <Link to={`/posts/${postData.id}`}>
            {postData.title}
          </Link>
        </H3>
      </TitleDiv>
      <PostButtons
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </Card>
  )
}

PostCard.propTypes = {
  postData: PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }),
  onDelete: PropTypes.func.isRequired
}
