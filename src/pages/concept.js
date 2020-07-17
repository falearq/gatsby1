import React from 'react'
import {graphql,useStaticQuery,Link} from 'gatsby'
import styled from 'styled-components';
import Layout from '../components/layout'

const Concept = ()=>{
    const data= useStaticQuery(graphql`
    query MyQuery {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
            html
            excerpt
            fields {
              slug
            }
            }
          }
        }
      }
      
    `)
    return(
        <Layout>
          <ConceptWrap>
        <h1 className='title'>Concepto</h1>
        <ul>
            {data.allMarkdownRemark.edges.map((edge)=>{
                return(
                    <Item>
                        <Link to={`/concept/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        <p>{edge.node.frontmatter.date}</p>
                        </Link>
                    </Item>
                )
            })}
        </ul>
        </ConceptWrap>
        </Layout>
    )
}

const ConceptWrap = styled.div`
flex-flow:column;
.title{
  margin-left:7em;
}
`
const Item = styled.li`
margin:1em;`

export default Concept