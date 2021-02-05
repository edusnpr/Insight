import React from 'react'
import Banner from '../components/Banner'
import BoxCase from '../components/BoxCase'
import BoxServicos from '../components/BoxServicos'
import Footer from '../components/Footer'
import { dadosHome } from '../data'
import {dataCaseBox} from '../data'
const Home = () => {
    return (
        <>
            <Banner data={dadosHome} />
            <BoxServicos />
            <BoxCase data={dataCaseBox} />
            <Footer />
        </>
    )
}

export default Home