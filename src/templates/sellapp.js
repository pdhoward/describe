import React from 'react'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageTitle from '../components/PageTitle'
import Container from '../components/Container'

const TagTemplate = ({ data }) => {
  const { name, slug } = data.contentfulProxies

  const posts = sortBy(data.contentfulProxies.sell, 'creationDate').reverse()
  console.log(posts)

  return (
    <div>
      <Helmet>
        <title>{`Tag: ${name} - ${config.siteTitle}`}</title>
        <meta
          property="og:title"
          content={`Tag: ${name} - ${config.siteTitle}`}
        />
        <meta property="og:url" content={`${config.siteUrl}/app/${slug}/`} />
      </Helmet>

      <Container>
        <PageTitle small>These dialogue bundles are handled by the &ldquo;{name}&rdquo; application</PageTitle>

        <CardList>
          {posts.map(post => (
            <Card
              key={post.id}
              slug={post.slug}
              image={post.heroImage}
              title={post.action}
              date={post.creationDate}
              excerpt={post.triggers}
            />
          ))}
        </CardList>
      </Container>
    </div>
  )
}

export const query = graphql`
  query sellAppQuery($slug: String!) {
    contentfulProxies(slug: { eq: $slug }) {
      name
      id
      slug
      sell {
        id
        action
        slug
        pattern
        creationDate(formatString: "MMMM DD, YYYY")
        heroImage {
          title
          sizes(maxWidth: 1800) {
            ...GatsbyContentfulSizes_withWebp_noBase64
          }
        }
        triggers {
          childMarkdownRemark {
            html
            excerpt(pruneLength: 30)
          }       
        }
      }
    }
  }
`

export default TagTemplate
