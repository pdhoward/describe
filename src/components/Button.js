import React from 'react'
import styled from 'styled-components'

const Format = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidth};
  padding: 3em 1.5em 2em;
  h1 {
  font-size: ${props => (props.small ? '2em' : '3em')};
  text-transform: capitalize;
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  }
  span {
    margin: 0 0 0 0.25em;
  }
  p {
    font-size: 25px;
    color: blue;
  }
  button {
    background: ${props => props.primary ? 'palevioletred' : 'white'};
    color: ${props => props.primary ? 'white' : 'palevioletred'};
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
  }
`

const Button = props => {
  return <Format>{props.children}</Format>
}

export default Button
