import React from 'react';
import Books from '../Books/Books';
import TopNavbar from '../TopNavbar/TopNavbar';
import TopQuestions from '../TopQuestions/TopQuestions';
import TwoSection from '../TwoSection/TwoSection';

const Home = () => {
    return (
        <div>
            <TopNavbar></TopNavbar>
            <TopQuestions></TopQuestions>
            <TwoSection></TwoSection>
            <Books></Books>
        </div>
    );
};

export default Home;