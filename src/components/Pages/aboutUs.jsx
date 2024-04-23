import React from 'react';
import FullBanner from '../UI/fullBanner'
import './aboutUs.css';
import AllData from '../../data.json';
import TeamCard from '../UI/teamCard';
import MainBox from '../UI/mailBox';
import { Link } from 'react-router-dom';


class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bannerTitle: "about us",
            bannerBreadcrumb: "home / about us",
        };
    }
    render() {
        return (
            <div className='page-main'>
                <div className='full-container'>
                    {/* Full banner setction Start */}
                    <div className="full-banner">
                        <FullBanner
                            BannerTitle={this.state.bannerTitle}
                            BannerBreadcrumb={this.state.bannerBreadcrumb}
                        />
                    </div>
                    {/* Full banner setction End */}

                    <div className='main-container'>
                        {/* Quotes setction Start */}
                        <div className='quotes-sec'>
                            <div className='quotes-block'>
                                <img className="banner-img" src="../img/quotes.png" alt="" />
                                <h3 className='quotes-desc'>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</h3>
                                <p className='quotes-name'>bunny williams</p>
                            </div>
                        </div>
                        {/* Quotes setction End */}

                        {/* What we do setction Start */}
                        <div className="wahtWeDo-sec">
                            {AllData.wahtWeDo.map((WahtWeDo) => {
                                const { wahtWeDoDesc, wahtWeDoTitle, wahtWeDoImg, id } = WahtWeDo;
                                // const ahtWeDo = WahtWeDo.slice(0, 5);
                                return (
                                    <div className='wahtWeDo-block' key={id}>
                                        <div className='wahtWeDo-detail'>
                                            <h1 className='wahtWeDo-title'>{wahtWeDoTitle}</h1>
                                            <p className='wahtWeDo-desc'>{wahtWeDoDesc}</p>
                                            <Link className='btn btn-default' to={`${id}`}>
                                                Get Free Estimate
                                                <img src="../img/orange-arrow.png" alt="" width={"15px"} />
                                            </Link>
                                        </div>
                                        <div className="wahtWeDo-img-block">
                                            <img src={wahtWeDoImg} alt="" />
                                        </div>
                                    </div>
                                )//
                            })}
                        </div>
                        {/* What we do setction End */}
                    </div>

                    {/* Team setction Start */}
                    <div className='team-sec'>
                        <div className='main-container'>
                            <h1 className='main-title'>What the People Thinks About Us</h1>
                            <div className='row'>
                                {AllData.teamProfile.map(TeamProfile => {
                                    return (
                                        <div className='col-md-3 '>
                                            <TeamCard
                                                TeamImg={TeamProfile.teamImg}
                                                TeamMemberName={TeamProfile.teamMemberName}
                                                TeamCatgCountry={TeamProfile.teamCatgCountry}
                                                TeamNumber={TeamProfile.teamNumber}
                                                TeamEmail={TeamProfile.teamEmail}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* Team setction End */}
                    <div className='main-box'>
                        <div className='main-container'>
                            <h1 className='main-title'>Creative project? Let's have a productive talk.</h1>
                            <MainBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;