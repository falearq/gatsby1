import React from 'react'
import styled from 'styled-components'
import  { graphql,useStaticQuery } from 'gatsby'


const Footer = ()=>{
    const data = useStaticQuery(graphql`
    query {
        site{
          siteMetadata {
            title
            author
          }
        }
      }
    `)
    return(
        <FooterWrap>
        {data.site.siteMetadata.title} © 2020  
         {data.site.siteMetadata.author} 5to Cuatrimestre. Licenciatura en Diseño Digital, ICONOS 
        </FooterWrap>
    )
}
const FooterWrap = styled.footer`
 font-family: 'Bohemian Typewriter';

height:10vh;
display:flex;
justify-content:space-around;
align-items: center;
bottom: 0;


`
export default Footer