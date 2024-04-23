import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutUs from './components/Pages/aboutUs';
import AboutUsDetail from './components/Pages/wahtWeDo';
import Home from './components/Pages/home';
import Footer from './layout/footer';
import Header from './layout/header';

function App() {
    return (
        <>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/aboutUs" element={<AboutUs />}></Route>
                    <Route path="/aboutUs/:id" element={<AboutUsDetail />}></Route>
                    {/* <Route exact path="/aboutUs/:id" render={() => (<AboutUsDetail /> )} /> */}
                </Routes>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            <Footer/>
        </>
    );
}

export default App;