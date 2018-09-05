import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const List = styled.ul`
  margin: 0 auto 2em auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
`

const Tag = styled.li`
  display: inline-block;
  a {
    transition: 0.2s;
    background: ${props => props.theme.colors.tertiary};
    padding: 0.5em;
    border-radius: 2px;
    text-transform: capitalize;
    margin: 0 0.5em 0 0;
    text-decoration: none;
    color: ${props => props.theme.colors.base};
    border: 1px solid ${props => props.theme.colors.secondary};
    &:hover {
      background: ${props => props.theme.colors.secondary};
    }
  }
`

const Pattern = styled.p`
  display: inline-block;
  span {
    font-weight: 600;
  }
`

const TagList = props => {   
    let tag = props.tags
  return (
    <div>
        <List>     
            <Tag key={tag.id}>
              <Link to={`/app/${tag.slug}/`}>{tag.name}</Link>
            </Tag>
            <Pattern>
              <span>Pattern:</span> {props.pattern}
            </Pattern>
        
        </List>
        
    </div>
  )
}

export default TagList
