import React from 'react'
import styled from 'styled-components'
import Footer from './footer'
import Header from './header'
import ImpactLabel from '../fonts/ImpactLabel.woff2'
import BohemianTypewriter from '../fonts/BohemianTypewriter.woff2'

const Layout = (props)=>{
    return(
        <LayoutWrap>
            <Header></Header>
            <Content>
            {props.children}
            </Content>
            <Footer></Footer>
        </LayoutWrap>
    )
}
const LayoutWrap = styled.div`
*{
    margin:0;
    box-sizing:border-box;
    }
    a{
    text-decoration:none;
    color:black;
    -webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
-ms-transition: all .5s ease-in-out;
-o-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;
}
a:hover{
    color:#e84725;
}

        @font-face{
            font-family:'Impact Label';
                src:
                url(${ImpactLabel}) format('woff2')
        }
            display:flex;
            flex-direction: column;
            
`
const Content = styled.div`
        @font-face{
            font-family:'Bohemian Typewriter';
                src:
                url(${BohemianTypewriter}) format('woff2')
        }
        h1,h2{
            font-family:'Impact Label'; 
        }
        h1{
            margin-bottom:1em;
        }
            font-family: 'Bohemian Typewriter';
            display:flex;
            flex-flow: column;
            flex-wrap: wrap;
            align-self:center;
            align-items:center;
            width:68%;
            margin-bottom:3em;
            
        .italics{
            
        }
        
`
export default Layout