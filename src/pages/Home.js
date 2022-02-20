import React from 'react';
import Header from "../components/Header";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="home-page">
            <Header/>
            <Form />
            <Footer/>
        </div>
    );
};

export default Home;