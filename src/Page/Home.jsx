import React from "react";
import "../Css/Nav.css";
import clock from '../Img/feature-1.png'
import free from '../Img/feature-2.png'
import best from '../Img/feature-3.png'
import customer from '../Img/feature-4.png'
import a1 from '../Img/a-1.jpg'
import a2 from '../Img/a-2.jpg'
import men from '../Img/w1.png'
import men1 from '../Img/w2.png'
import men2 from '../Img/w3.png'
import men3 from '../Img/w4.png'
import men4 from '../Img/w5.png'
import men5 from '../Img/w6.png'
import men6 from '../Img/w7.png'
import men7 from '../Img/w8.png'
import men8 from '../Img/w9.png'
import client from '../Img/client.jpg'
import location from '../Img/location-white.png'
import telephone from '../Img/telephone-white.png'
import envelope from '../Img/envelope-white.png'
import w1 from '../Img/w1.png'
import w2 from '../Img/w2.png'
import w3 from '../Img/w3.png'
import w4 from '../Img/w4.png'
import w5 from '../Img/w5.png'
import w6 from '../Img/w6.png'
import fb from '../Img/fb.png'
import twitter from '../Img/twitter.png'
import linkedin from '../Img/linkedin.png'
import youtube from '../Img/youtube.png'
const Home = () => {
  return (
    <div>
      <section>
        <div>
          <div className="banner-bg">
            <div className="col-md-7">
              <h1 className="margin">STYLISH WATCHES</h1>
              <br />
              <p className="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus
                quidem maiores <br />perspiciatis, illo maxime voluptatem a itaque
                suscipit
              </p>
             
              
            </div>
            <button><a href="Login"  className="pro px-3 py-2">product</a></button>
              <button><a href="cart"  className="pro-1 px-4 py-2">cart</a></button>
          </div>
        </div>
      </section>


 <section class="service_section">
    
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
            < img src={clock} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Fast Delivery
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
            < img src={free} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Free Shiping
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
            < img src={best} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                Best Quality
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-3">
          <div class="box ">
            <div class="img-box">
            < img src={customer} alt="" />
            </div>
            <div class="detail-box">
              <h5>
                24x7 Customer support
              </h5>
              <p>
                variations of passages of Lorem Ipsum available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

      <section class="about_section layout_padding">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6">
          <div class="img_container">
            <div class="img-box b1">
            <img src={a1} alt="" />
            </div>
            <div class="img-box b2">
            <img src={a2} alt="" />
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="detail-box">
            <h2>
              About Our Shop
            </h2>
            <p>
              There are many variations of passages of Lorem Ipsum
              There are many variations of
              passages of Lorem Ipsum
            </p>
            <a href="">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="product_section ">
    <div class="container">
      <div class="product_heading">
        <h2>
          Top Sale Watches
        </h2>
      </div>
      <div class="product_container">
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men1} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men2} alt=""/>
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="product_section ">
    <div class="container">
      <div class="product_heading">
        <h2>
          Feature Watches
        </h2>
      </div>
      <div class="product_container">
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men3} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="img-box">
              <img src={men4} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men5} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="product_section ">
    <div class="container">
      <div class="product_heading">
        <h2>
          New Arrivals
        </h2>
      </div>
      <div class="product_container">
        <div class="box">
          <div class="box-content">
            <div class="img-box">
           < img src={men6} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men7} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
        <div class="box">
          <div class="box-content">
            <div class="img-box">
            <img src={men8} alt="" />
            </div>
            <div class="detail-box">
              <div class="text">
                <h6>
                  Men's Watch
                </h6>
                <h5>
                  <span>$</span> 300
                </h5>
              </div>
              <div class="like">
                <h6>
                  Like
                </h6>
                <div class="star_container">
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-box">
            <a href="">
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="contact_section layout_padding">
    <div class="container">
      <div class="heading_container">
        <h2>
          Contact Us
        </h2>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="form_container">
            <form action="">
              <div>
                <input type="text" placeholder="Your Name" />
              </div>
              <div>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div>
                <input type="email" placeholder="Email" />
              </div>
              <div>
                <input type="text" class="message-box" placeholder="Message" />
              </div>
              <div class="btn_box">
                <button>
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 ">
          <div class="map_container">
            <div class="map">
              <div id="googleMap"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="client_section layout_padding-bottom">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          Testimonial
        </h2>
      </div>
    </div>
    <div id="customCarousel2" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row">
              <div class="col-md-10 mx-auto">
                <div class="box">
                  <div class="img-box">
                  < img src={client} alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="client_info">
                      <div class="client_name">
                        <h5>
                          Morojink
                        </h5>
                        <h6>
                          Customer
                        </h6>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      dolore eu fugia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-10 mx-auto">
                <div class="box">
                  <div class="img-box">
                  < img src={client} alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="client_info">
                      <div class="client_name">
                        <h5>
                          Morojink
                        </h5>
                        <h6>
                          Customer
                        </h6>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      dolore eu fugia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row">
              <div class="col-md-10 mx-auto">
                <div class="box">
                  <div class="img-box">
                  < img src={client} alt="" />
                  </div>
                  <div class="detail-box">
                    <div class="client_info">
                      <div class="client_name">
                        <h5>
                          Morojink
                        </h5>
                        <h6>
                          Customer
                        </h6>
                      </div>
                      <i class="fa fa-quote-left" aria-hidden="true"></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore
                      et
                      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                      cillum
                      dolore eu fugia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ol class="carousel-indicators">
        <li data-target="#customCarousel2" data-slide-to="0" class="active"></li>
        <li data-target="#customCarousel2" data-slide-to="1"></li>
        <li data-target="#customCarousel2" data-slide-to="2"></li>
      </ol>
    </div>
  </section>

  <section class="info_section layout_padding2">
    <div class="container">
      <div class="info_logo">
        <h2>
          HandTime
        </h2>
      </div>
      <div class="row">

        <div class="col-md-3">
          <div class="info_contact">
            <h5>
              About Shop
            </h5>
            <div>
              <div class="img-box">
              < img src={location} alt="" />
              </div>
              <p>
                Address
              </p>
            </div>
            <div>
              <div class="img-box">
              < img src={telephone} alt="" />
                
              </div>
              <p>
                +01 1234567890
              </p>
            </div>
            <div>
              <div class="img-box">
              < img src={envelope} alt="" />
              </div>
              <p>
                demo@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="info_info">
            <h5>
              Informations
            </h5>
            <p>
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            </p>
          </div>
        </div>

        <div class="col-md-3">
          <div class="info_insta">
            <h5>
              Instagram
            </h5>
            <div class="insta_container">
              <div class="row m-0">
                <div class="col-4 px-0">
                  <a href="">
                    <div class="insta-box b-1">
                    < img src={w1} alt="" />
          
                    </div>
                  </a>
                </div>
                <div class="col-4 px-0">
                  <a href="">
                    <div class="insta-box b-1">
                    < img src={w2} alt="" />
                    </div>
                  </a>
                </div>
                <div class="col-4 px-0">
                  <a href="">
                    <div class="insta-box b-1">
                    < img src={w3} alt="" />
                    </div>
                  </a>
                </div>
                <div class="col-4 px-0">
                  <a href="">
                    <div class="insta-box b-1">
                    < img src={w4} alt="" />
                    </div>
                  </a>
                </div>
                <div class="col-4 px-0">
                  <a href="">
                    <div class="insta-box b-1"> 
                     < img src={w5} alt="" />
                    </div>
                  </a>
                </div>
                <div class="col-4 px-0">
                  <a href="">
                    <div class="insta-box b-1">
                    < img src={w6} alt="" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-3">
          <div class="info_form ">
            <h5>
              Newsletter
            </h5>
            <form action="">
              <input type="email" placeholder="Enter your email"></input>
              <button>
                Subscribe
              </button>
            </form>
            <div class="social_box">
              <a href="">
              < img src={fb} alt="" />
              </a>
              <a href="">
              < img src={twitter} alt="" />
              </a>
              <a href="">
              < img src={linkedin} alt="" />
              </a>
              <a href="">
              < img src={youtube} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="footer_section">
    <div class="container">
      <p>
        &copy; <span id="displayYear"></span> All Rights Reserved By
        <a href="https://html.design/">Free Html Templates</a>
      </p>
    </div>
  </section>
    </div>
  );
};

// export default Home
// import React from 'react'
// import Button from 'react-bootstrap/Button';
// import banner from '../img/bg.webp'
// import "../css/Nav.css"
// import clock from '../img/banner-sm-1.jpg'
// import chair from '../img/banner-sm-2.jpg'
// import supadi from '../img/banner-sm-3.jpg'
// import still from '../img/1.jpg'
// import bottle from '../img/2.jpg'
// import bag from '../img/3.jpg'
// import body from '../img/4.jpg'
// import mc from '../img/5.jpg'
// import lamp from '../img/6.jpg'
// import tree from '../img/7.jpg'
// import tuval from '../img/8.jpg'
// import spun from '../img/9.jpg'
// import light from '../img/10.jpg'
// import com from '../img/blog-1.jpg'
// import cher from '../img/blog-2.jpg'
// import benchis from '../img/blog-3.jpg'

// const Home = () => {
//   return (

//     <div>
//       <section className='' id='banner'>
//         <div className='col-md-6'>
//           <h1 className='fw-bold text-center text-black margin display-6'>Lighting </h1>
//           <h4 className='fw-bold text-center text-black margin1 display-6'>Creative Furniture</h4>

//           <p className='margin3'>From luxury watches and chronographs to wall clocks and weather stations, Henning Koppel's.</p>
//           <button className='margin4'>DISCOVER</button></div>
//         <div className='col-md-6'>
//           <img src="{banner-section}" alt="" />
//         </div>
//       </section>

//       {/* 2 */}

//       <section>
//         <div className="container">
//           <div className="row mt">
//             <div className="col-md-12 col-lg-4 col-12">
//               <img src={clock} alt="" />
//               <p className='sun'>Sunflower Clock Quartz Hands</p>
//               <p className='sun1'>Discover Now</p>
//             </div>
//             <div className="col-md-12 col-lg-4 col-12">
//               <img src={chair} alt="" />
//               <p className='sun'>Chair kimi No Isu Project</p>
//               <p className='sun1'>Discover Now</p>
//             </div>
//             <div className="col-md-12 col-lg-4 col-12">
//               <img src={supadi} alt="" />
//               <p className='sun'>Sweeper and Dustpan by Jan Konchanski</p>
//               <p className='sun1'>Discover Now</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* 3 */}

//       {/* 4 */}

//       <section>
//         <div className="container">
//           <div className=''>
//             <h3 className='f-36 text-center mt'>Sale Off</h3>
//             <p className='f-14 grey text-center mt-3'>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
//             <div className="nav mt-5">
//               <div className='w-20'>
//                 <img src={still} alt="" className='m1' />
//                 <h6 className='gb wc-1 mt-3 f-14'>Wooden Container Bowl</h6>
//                 <h6 className='wc-1 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={bottle} alt="" className='m2' />
//                 <h6 className='gb wc-2 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-2 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={bag} alt=""
//                   className='m3' />
//                 <h6 className='gb wc-3 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-3 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={body} alt="" className='m4' />
//                 <h6 className='gb wc-4 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-4 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={mc} alt=""
//                   className='m5' />
//                 <h6 className='gb wc-5 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-5 f-14'>$ 96.00</h6>
//               </div>
//             </div>
//             <div className="nav mt-5">
//               <div className='w-20'>
//                 <img src={lamp} alt="" className='m1' />
//                 <h6 className='gb wc-1 mt-3 f-14'>Wooden Container Bowl</h6>
//                 <h6 className='wc-1 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={tree} alt="" className='m2' />
//                 <h6 className='gb wc-2 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-2 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={tuval} alt=""
//                   className='m3' />
//                 <h6 className='gb wc-3 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-3 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={spun} alt="" className='m4' />
//                 <h6 className='gb wc-4 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-4 f-14'>$ 96.00</h6>
//               </div>
//               <div className="w-20">
//                 <img src={light} alt=""
//                   className='m5' />
//                 <h6 className='gb wc-5 mt-3'>Wooden Container Bowl</h6>
//                 <h6 className='wc-5 f-14'>$ 96.00</h6>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className="container">
//           <div className="row ">
//             <h3 className='f-36 text-center '>Our Blog Posts</h3>
//             <p className='f-14 grey text-center mt-3'>Mirum est notare quam littera gothica quam nunc putamus parum claram!</p>
//             <div className="col-12 com-md-6 ">
//               <div className='mt-5'>
//               <img src={com} alt="" className='blog-1' />
//               <img src={cher} alt="" className='blog-2' />
//               <img src={benchis} alt="" />
//               <div className="col-12 com-md-6 col.lg-4">
//               <h6>Anteposuerit Litterarum formas.</h6>
//               <h6>Hanging Fruit to identify</h6>
//               <h6>The information highway will</h6>
//               </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </div>
//   )
// }

// export default Home
export default Home;
