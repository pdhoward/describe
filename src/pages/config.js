import React from "react";
import styled from 'styled-components'
import logo from "../images/smlogo.png"
import Link from "gatsby-link";

const Wrapper = styled.h1`
  font-size: ${props => (props.small ? '1.25em' : '2em')};  
  font-weight: 600;
  text-align: center;
  margin: 0 0 3rem 0;
  margin: ${props => (props.small ? '1rem 0 4rem 0' : '0 0 3rem 0')};
  line-height: 1.2;
  span {
    margin: 0 0 0 0.25em;
  }
  a {
    transition: all 0.2s;
    color: ${props => props.theme.colors.base};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }  
  .center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
`

export default () => (
  <div>
    <Wrapper>
      <br></br>
      <p>Placeholder for User Defined PLatform Configs</p>
      <br></br>
      <img src={logo} alt="Center Images" className="center" />
    </Wrapper>
  </div>
);
