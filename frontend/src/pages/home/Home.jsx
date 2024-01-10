import React from 'react'
import "./home.css"
import NavBar from '../../components/navBar/NavBar'
import Header from '../../components/header/Header'

const Home = () => {
    return (
        <div>
            <div className="homeNav">
                <NavBar />
                <Header />
            </div>

        </div>
    )
}

export default Home
