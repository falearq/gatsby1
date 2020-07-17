import React from "react"
import { Link } from 'gatsby'
import styled from'styled-components'
import Layout from "../components/layout"
import ava from '../img/ava.png'


const Index = () => {
    return(
        <Layout>
        <h1>TJ3K</h1>
        <p>TJ3K es un proyecto multimedia que a través de una infografía animada, un sitio web y una postal sonora busca criticar la sociedad. Esto con recursos del subgénero de la ciencia ficción,el cyberpunk. Los referentes centrales del proyecto son las películas デスパウダー<i className='italics'> Death Powder </i> de 1986, y  鉄男 <i className='italics'>Tetsuo The Iron Man</i> de 1989. Estas películas tienen cierta estética que entra en la categoría de lo abyecto, elemento clave del proyecto. Sí tienes alguna duda o quieres saber más puedes visitar la sección de <Link to='/contact'>Contacto</Link></p>
        <Ava alt='Ava. Personaje principal de TJ3K' src={ava}></Ava>
        </Layout>
    )
}
const Ava = styled.img`
margin-top:-5em;
z-index: -999;
`
export default Index