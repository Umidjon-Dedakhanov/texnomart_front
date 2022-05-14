import React from 'react'
import Header from "../../components/header/Header"
import Banner from '../../components/banner/Banner'
import Rassrochka from '../../components/rassrochka/Rassrochka'
import Footer from '../../components/footer/Footer'
import AllProducts from '../../components/allProducts/AllProducts'

const Home = () => {
    
    return (
        <div>
            <Header/>
            <Banner/>
            <AllProducts/>
            <Rassrochka/>
            <Footer/>
        </div>
    )
}

export default Home
