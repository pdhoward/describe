import React from 'react'
import styled from 'styled-components'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope'
import Container from '../components/Container'
import smlogo from "../images/smlogo.png"

const Wrapper = styled.footer`
  margin-bottom: 0px;
  color: #0f0f0f;
  @media screen and (max-width: 767px) {
    font-size: 12px;
  }
  @media screen and (min-width: 767px) {
    font-size: 12px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
  text-align: center;
  position: relative;
  a {
    color: #525252;
    &:visited {
      color: #525252;
    }
    &:hover {
      color: #11abb0;
    }
    &:focus {
      color: #11abb0;
    }
  }
`

const Social = styled.div`
  margin: 18px 0 30px 0;
  padding: 0;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 767px) {
    font-size: 22px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 30px;
  }
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    img {
      width: 22px;
    }
    @media screen and (max-width: 767px) {
      margin-left: 14px;
    }
    @media screen and (min-width: 767px) {
      margin-left: 18px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 42px;
    }
    &:first-child {
      margin-left: 0;
    }
    a[href^='mailto:'] {
      color: #525252;
      &:visited {
        color: #525252;
      }
      &:hover {
        color: #11abb0;
      }
      &:focus {
        color: #11abb0;
      }
    }
  }
`

const Copyright = styled.div`
  margin: 0;
  padding: 0;
  li {
    display: inline-block;
    margin: 0;
    padding: 0;
    line-height: 24px;
    &:before {
      padding-left: 10px;
      padding-right: 10px;
      color: #095153;
    }
  }
  a {
    text-decoration: none;
  }
  strong {
    font-weight: 700;
  }
`

const Footer = () => (
  <Container>
    <Wrapper>
      <Social>
        <li>
          <a href="https://twitter.com/chaoticbots" target="_blank">
            <img src={smlogo} alt="no deal" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/urban_coder" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/patrickhowardusa/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://github.com/pdhoward" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href="mailto:info@xiollc.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
      </Social>
      <Copyright>
        Built with{' '}
        <a href="https://www.linkedin.com/company/strategic-machines-inc/" target="_blank">
          <strong>Intelligent Content</strong>
        </a>{' '}
        by{' '}
        <a href="https://www.linkedin.com/company/strategic-machines-inc/" target="_blank">
          <strong>Strategic Machines</strong>
        </a>
        <br />
        <li>&copy; Copyright 2018</li>
      </Copyright>
    </Wrapper>
  </Container>
)
export default Footer
