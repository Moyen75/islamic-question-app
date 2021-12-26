import React from 'react';
import Books from '../Books/Books';
import Footer from '../Footer/Footer';
import SixPack from '../SixPack/SixPack';
import TopNavbar from '../TopNavbar/TopNavbar';
import TopQuestions from '../TopQuestions/TopQuestions';
import TwoSection from '../TwoSection/TwoSection';

const Home = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <SixPack></SixPack>
            <TopQuestions></TopQuestions>
            <TwoSection></TwoSection>
            <Books></Books>
            <Footer></Footer>
        </div>
    );
};

export default Home;