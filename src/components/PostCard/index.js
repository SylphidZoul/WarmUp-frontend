import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Card, TitleDiv, H3, ButtonsDiv, Button } from './styles'
import PropTypes from 'prop-types'

export const PostCard = ({ postData, onDelete }) => {
  const history = useHistory()

  const handleEdit = () => {
    history.push(`/posts/edit/${postData.id}`, postData)
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
      <ButtonsDiv>
        <Button
          type='button'
          onClick={handleEdit}
        >
          Edit
        </Button>
        <Button
          type='button'
          onClick={() => onDelete(postData.id)}
          remove
        >
          Delete
        </Button>
      </ButtonsDiv>
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
