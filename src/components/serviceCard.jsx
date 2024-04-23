import React from 'react';
import './serviceCard.css';

function serviceCard(props) {
    return (
        <>
            <div className='design-work'>
                <div className='text-center px-4'>
                    <h5>{props.Title}</h5>
                    <p>{props.Description}</p>
                    <button className='btn'> Read More <img src="../img/Vector.svg" alt="" width={"15px"}/> </button>
                </div>
            </div>
        </>
    )
}

export default serviceCard;