import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logotipo from '../img/logotipo.png'



const Header = ()=>{
   
    return(
        <HeaderWrap>
        <Link to='/'><img className='logo' src={Logotipo} alt='TJ3K'></img></Link>
        <Link to='/concept'>Concepto</Link>
        <Link to='/about'>Acerca</Link>
        <Link to='/contact'>Contacto</Link>
        
        </HeaderWrap>
    )
}
const HeaderWrap = styled.nav`
font-family:'Impact Label';
text-decoration:none;
font-size:4vw;
height:20vh;
display:flex;
justify-content:space-evenly;
align-items: center;
.logo{
  
  -webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
-ms-transition: all .5s ease-in-out;
-o-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;
  max-width:200px;
  max-height:200px;
  margin-top:1.4em;

}
.logo:hover{
  max-width:210px;
  max-height:210px;
  -webkit-transition: all 1s ease-in-out;
-moz-transition: all 1s ease-in-out;
-ms-transition: all 1s ease-in-out;
-o-transition: all 1s ease-in-out;
transition: all 1s ease-in-out;
}
`

export default Header