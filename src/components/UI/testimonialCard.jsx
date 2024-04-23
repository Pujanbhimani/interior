import React from "react";

import './ui.css';
function TestimonialCard(props) {
    return (
        <>
            <div className="testimonial-card">
                <div className='testimonial-card-header'>
                    <img src={props.TestimonialImg} alt="" width={"32px"} />
                    <div>
                        <strong className="people-name">{props.PeopleName}</strong>
                        <p className="country-name">{props.CountryName}</p>
                    </div>
                </div>
                <p className="testimonial-detail">{props.TestimonialDetail}</p>
            </div>
        </>
    )
}

export default TestimonialCard;