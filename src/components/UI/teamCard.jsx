import React from "react";

function TeamCard(props) {
    return (
        <>
            <div className='team-block'>
                <div className='team-img'>
                    <img src={props.TeamImg} alt="" />
                </div>
                <div className='team-content'>
                    <h6 className="team-member-name">{props.TeamMemberName}</h6>
                    <p className="team-country">{props.TeamCatgCountry}</p>
                    <div className='team-icon-block'>
                        <a className='team-icon' href='/' alt="">
                            <img src="../img/facebook.png" alt="" />
                        </a>
                        <a className='team-icon' href='/' alt="">
                            <img src="../img/twitter.png" alt="" />
                        </a>
                        <a className='team-icon' href='/' alt="">
                            <img src="../img/linkedin.png" alt="" />
                        </a>
                        <a className='team-icon' href='/' alt="">
                            <img src="../img/insta.png" alt="" />
                        </a>
                    </div>
                    <p className="team-number">{props.TeamNumber}</p>
                    <p className="team-email">{props.TeamEmail}</p>
                </div>
            </div>
        </>
    );
}

export default TeamCard;