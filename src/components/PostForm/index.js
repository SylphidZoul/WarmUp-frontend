import React, { useEffect, useState } from 'react'
import { Form, H2, Label, Input, TextArea, Button } from './styles'
import PropTypes from 'prop-types'

export const PostForm = ({ formTitle, onSubmit, postToEdit }) => {
  const [titleValue, setTitleValue] = useState('')
  const [bodyValue, setBodyValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    if (postToEdit) {
      setTitleValue(postToEdit.title)
      setBodyValue(postToEdit.body)
    }
  }, [])

  useEffect(() => {
    (titleValue !== '' && bodyValue !== '')
      ? setIsDisabled(false)
      : setIsDisabled(true)
  }, [titleValue, bodyValue])

  const handleSubmit = (e) => {
    e.preventDefault()
    const post = {
      title: titleValue,
      body: bodyValue
    }
    onSubmit(post)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <H2>{formTitle}</H2>
      <Label>
        Title
      </Label>
      <Input
        type='text'
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <Label>
        Content
      </Label>
      <TextArea
        value={bodyValue}
        onChange={(e) => setBodyValue(e.target.value)}
      />
      <Button
        type='submit'
        disabled={isDisabled}
      >
        Submit
      </Button>
    </Form>
  )
}

PostForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  postToEdit: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string
  })
}
