import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const About = ()=>{
    return(
        <Layout>
        <h1>Acerca</h1>
        <p>TJ3K es un proyecto multimedia que se concentra en una infografía animada, un sitio web y una postal sonora. 
            Está centrado en el análisis de dos películas japonesas de bajo presupuesto  que son referentes del cine de ciencia ficción y del subgénero del cyberpunk:  デスパウダー<i className='italics'>Death Powder</i>  de 1986 dirigida por 泉谷 しげる Shigeru Izumiya; y 鉄男 <i className='italics'>Tetsuo The Iron Man</i> de 1989 dirigida por 塚本 晋也 Shinya Tsukamoto.  <Link to='/contact'>Contacto</Link></p>
        </Layout>
    )
}
export default About