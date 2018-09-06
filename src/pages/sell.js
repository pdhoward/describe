import React from 'react'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import logo from "../images/mercyblueicon.jpg"


const SellTemplate = ({ data }) => {
  console.log()
  const posts = data.allContentfulSell.edges  

  return (    <div>  
     
      <Container>
        <PageTitle small>
          <img src={logo} alt="no deal" />
          <a
            href="http://mercycharlotte.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mercy Charlotte
          </a>
        </PageTitle>
        <CardList>
          {posts.map(({ node: post }) => (
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
  query sellQuery {
    allContentfulSell(
      limit: 1000
      sort: { fields: [creationDate], order: DESC }
    ) {
      edges {
        node {
          action
          id
          slug
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
              excerpt(pruneLength: 16)
            }
          }
        }
      }
    }
  }
`

export default SellTemplate
