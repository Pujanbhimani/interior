// import React from "react";
import { useParams } from "react-router-dom";
import AllData from '../../data.json';



const AbuotUsDetail = () => {
    let { id } = useParams();
    const prodct = AllData.wahtWeDo.find((WahtWeDo) => WahtWeDo.id === id);
    const { wahtWeDoDesc, wahtWeDoTitle, wahtWeDoImg } = prodct;
    // const { wahtWeDoDesc } = prodct || {};

    return (
        <>
            <div className='main-container wahtWeDo-main-block'>
                <div className="wahtWeDo-detial">
                    <img className="wahtWeDo-img" src={wahtWeDoImg} alt="" />
                    <h1 className='wahtWeDo-title'>{wahtWeDoTitle}</h1>
                    <p className='wahtWeDo-desc'>{wahtWeDoDesc}</p>
                </div>
            </div>
        </>
    );
};

export default AbuotUsDetail;