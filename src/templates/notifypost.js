import React from 'react'
import find from 'lodash/find'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Hero from '../components/Hero'
import Container from '../components/Container'
import PageBody from '../components/PageBody'
import TagList from '../components/TagList'
import PostLinks from '../components/PostLinks'
import PostDate from '../components/PostDate'
import SEO from '../components/SEO'

const PostTemplate = ({ data }) => {
  const {
    action,
    slug,
    id,
    heroImage,
    triggers,
    creationDate,
    proxies,
    response,
    link,
    executeLink,
    pattern
  } = data.contentfulNotify
  const postNode = data.contentfulNotify
  console.log("post node")
  console.log(postNode)

  const postIndex = find(
    data.allContentfulNotify.edges,
    ({ node: ask }) => ask.id === id
  )

  return (
    <div>
      <Helmet>
        <title>{`${action} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} postSEO />

      <Hero title={action} image={heroImage} height={'50vh'} />

      <Container>
        {proxies && <TagList tags={proxies} pattern={pattern} />}
        <PostDate date={creationDate} />
        <PageBody body={triggers} response={response} link={link} executeLink={executeLink}/>
        <PostLinks previous={postIndex.previous} next={postIndex.next} />
      </Container>
    </div>
  )
}

export const query = graphql`
  query notifypostQuery($slug: String!) {
    contentfulNotify(slug: { eq: $slug }) {
      action
      id
      slug
      response           
      pattern
      metaDescription {
        internal {
          content
        }
      }
      creationDate(formatString: "MMMM DD, YYYY")
      publishDateISO: creationDate(formatString: "YYYY-MM-DD")
      proxies {
        name
        id
        slug
      }
      channels {
        name
        id
        description
      }
      heroImage {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
      triggers {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
    allContentfulNotify(
      limit: 1000
      sort: { fields: [creationDate], order: DESC }
    ) {
      edges {
        node {
          id
        }
        previous {
          slug
        }
        next {
          slug
        }
      }
    }
  }
`

export default PostTemplate
