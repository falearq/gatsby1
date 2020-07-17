import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

export const query = graphql`
query($slug: String!){
    markdownRemark(fields: {slug:{eq:$slug}}){
        frontmatter{
            title
            date
        }
        html
    }
}
`
const Concept = (props) => {

    return(
        <>
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div className='img'dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>
    </>)
}
 export default Concept