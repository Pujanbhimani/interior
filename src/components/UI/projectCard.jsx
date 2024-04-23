import './ui.css';
import React from "react";

function ProectsCards(props) {
    return (
        <>
            <img className="project-img" src={props.ProjectImg} alt='' />
            <div>
                <div>
                    <strong className="project-name">{props.ProjectName}</strong>
                    <p className="project-catg">{props.ProjectCatagory}</p>
                </div>
                <button className="next-btn"><img src="./img/next-arrow.png" alt='' /></button>
            </div>
        </>
    )
}

export default ProectsCards;