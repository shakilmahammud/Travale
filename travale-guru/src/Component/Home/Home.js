import { Container } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { userContext } from '../../App';
import Header from '../Header/Header';
import Search from '../Search/Search';
import TravelSection from '../TravelSection/TravelSection';
import './Home.css'

const Home = () => {
const [showPlace,setshowPlace,loggedIn]=useContext(userContext)
    return (
            <div className="home-container" 
            style={{background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showPlace.img})`,  height:"100vh", backgroundSize:"cover"}}
            >
            <Container>
            <Header></Header>
            <Search/>
            <TravelSection></TravelSection>
            </Container>
            </div>
    );
};

export default Home;