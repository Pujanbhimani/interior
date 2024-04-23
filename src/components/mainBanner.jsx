import React from "react";
import './mainBanner.css';

function MainBanner(props){
    return (
        <>
            <div className='main-banner'>
            <img className='banner-img' src="../img/Banner.png" alt=""/>
            <div className='banner-content'>
                <h1>
                    {props.BannerTitle}
                </h1>
                <p>
                    {props.BannerDescription}
                </p>
                <button className='btn btn-default'> Get Started <img src="../img/Vector.svg" alt="" width={"15px"}/> </button>
            </div>        
        </div>       
        </>
    );
}

export default MainBanner;