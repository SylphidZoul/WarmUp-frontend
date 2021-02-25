import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Ul, Li, Button } from './styles'

export const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to='/'>
            Home
          </Link>
        </Li>
        <Li>
          <Link to='/posts/create'>
            <Button type='button'>
              New Post
            </Button>
          </Link>
        </Li>
      </Ul>
    </Nav>
  )
}
