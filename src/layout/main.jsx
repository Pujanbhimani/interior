import React from 'react';
import MainBanner from '../components/mainBanner';
import ServiceCard from "../components/serviceCard";
import BlogCard from '../components/UI/blogCard';
import Contact from '../components/UI/contact';
import Counter from '../components/UI/counter';
import ProectsCards from '../components/UI/projectCard';
import TestimonialCard from '../components/UI/testimonialCard';
import AllData from '../data.json';
import './main.css'

// function Main() {

//     let bannerTitle = "Let Your Home Be Unique";
//     let bannerDescription = "There are many variations of the passages of lorem Ipsum fromavailable, majority."   


//     return (
//         <div className='page-main'>
//             {/* Main Banner Section  Start*/}
//                 <MainBanner 
//                     BannerTitle={bannerTitle}
//                     BannerDescription={bannerDescription}
//                 />
//             {/* Main Banner Section  Start*/}

//             {/* Service Section  Start*/}
//                 <div className="row">
//                     {AllData.map(service => {
//                         return (
//                             <div className="col-md-4" key={service.id}>
//                                 <ServiceCard Title={service.title} Description={service.description} />
//                             </div>
//                         )
//                     })}
//                 </div>
//             {/* Service Section  End*/}
//         </div>
//     );
// }

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerTitle: "Let Your Home Be Uniq",
      bannerDescription: "There are many variations of the passages of lorem Ipsum fromavailable, majority.",
      aboutUsTitle: "We Create The Art Of Stylish Living Stylishly",
      aboutDescription: "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal."
    };
  }
  render() {
    return (
      <div className='page-main'>
        <div className='main-container'>
          {/* Main Banner Section  Start*/}
          <div>
            <MainBanner
              BannerTitle={this.state.bannerTitle}
              BannerDescription={this.state.bannerDescription}
            />
          </div>
          {/* Main Banner Section  Start*/}

          {/* Service Section  Start*/}
          <div className="row">
            {AllData.service.map(Service => {
              return (
                <div className="col-md-4" key={Service.id}>
                  <ServiceCard Title={Service.title} Description={Service.description} />
                </div>
              )
            })}
          </div>
          {/* Service Section  End*/}

          {/* About Us Section Start */}
          <div className='aboutUs'>
            <div className='row align-items-center'>
              <div className='col-md-6 aboutUs-detail'>
                <h1 className='main-title'>{this.state.aboutUsTitle}</h1>
                <p className='aboutus-desc'>{this.state.aboutDescription}</p>
                <div className='call-sec'>
                  <div className='call-img'>
                    <img src="./img/Call.svg" alt="" width={"32px"} />
                  </div>
                  <div>
                    <span className='call-num'>012345678</span>
                    <span className='call-text'>Call Us Anytime</span>
                  </div>
                </div>
                <button className='btn btn-default'> Get Free Estimate <img src="Vector.svg" alt="" width={"15px"} /> </button>
              </div>
              <div className='col-md-6'>
                <div className='aboutUs-img'>
                  <img src="./img/aboutus-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* About Us Section End */}

          {/* Testimonial Section Start */}
          <div className='testimonial'>
            <h1 className='main-title'>What te people think about us</h1>
            <div className='row'>
              {AllData.testimonial.map(Testimonial => {
                return (
                  <div className='col-4' key={Testimonial.id}>
                    <TestimonialCard
                      PeopleName={Testimonial.peopleName}
                      CountryName={Testimonial.countryName}
                      TestimonialDetail={Testimonial.testimonialDetail}
                      TestimonialImg={Testimonial.testimonialImg}
                    />
                  </div>
                )//
              })}
            </div>
          </div>
          {/* Testimonial Section End */}

          {/* Client Logo Section Start */}
          <div className='client-logo'>
            {AllData.clientLogo.map(Client => {
              return (
                <img src={Client.clientImg} alt="" />
              )
            })}
          </div>
          {/* Client Logo Section End */}

          {/* Project Section Start */}
          <div className='project-sec'>
            <h1 className='main-title'>Follow our proects</h1>
            <p className='main-desc'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            <div className='row g-5 '>
              {AllData.projects.map(Proects => {
                return (
                  <div className='col-md-6 project-block' key={Proects.id}>
                    <ProectsCards
                      ProjectName={Proects.projectName}
                      ProjectCatagory={Proects.projectCatagory}
                      ProjectImg={Proects.projectImg}
                    />
                  </div>
                )
              })}
            </div>
          </div>
          {/* Project Section End */}
        </div>

        {/* Counter Section Start */}
        <div className='full-container counter'>
          <div className='main-container'>
            <Counter />
          </div>
        </div>
        {/* Counter Section End */}

        <div className='main-container '>
          {/* Project Section End */}
          <div className='blog-sec'>
            <h1 className='main-title'>Follow our proects</h1>
            <p className='main-desc'>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
            <div className='blog-grid'>
              {AllData.blog.map(Blog => {
                return (
                  <div className='blog-block' key={Blog.id}>
                    <BlogCard
                      BlogImg={Blog.blogImg}
                      BlogCatg={Blog.blogCatg}
                      BlogName={Blog.blogName}
                      BlogDate={Blog.blogDate}
                    />
                  </div>
                )//
              })}
            </div>
          </div>
          {/* Project Section End */}

          {/* Contact Section End */}
          <div className='contact-sec'>
            <Contact />
          </div>
          {/* Contact Section End */}
        </div>
      </div>
    );
  }
}


export default Main;