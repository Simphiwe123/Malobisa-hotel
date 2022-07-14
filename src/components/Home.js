import React from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Restaurant from "./Restaurant";
import Rooms from "./Rooms";
import "../index.css";
import img1 from "../images/bg_2.jpg";
import "./Rooms.css";
import './Home.css';
import img2 from "../images/bg_3.jpg";
import img3 from "../images/room-1.jpg";
import img4 from "../images/room-2.jpg";
import img5 from "../images/room-3.jpg";
import img6 from "../images/room-4.jpg";
import img7 from "../images/room-6.jpg";
import img8 from "../images/bg_1.jpg";
import img9 from "../images/restaurant-pattern.jpg";
import img10 from "../images/menu-1.jpg";
import img11 from "../images/menu-2.jpg";
import vid1 from "../images/Metropole Hotel Le Club Hanoi - Restaurant Design by GEMA - Video Showcase.mp4";

function Home() {
  return (
    
    <div className="home" >
        <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container">

        <a className="navbar-brand" >MALOBISA HOTEL</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="oi oi-menu"></span> Menu
        </button>
        </div>
        <div className="collapse navbar-collapse" id="ftco-nav">

        <ul className="navbar-nav ml-auto">
        <li className="nav-item"><Link to='/' className="nav-link">Home</Link></li>
	          <li className="nav-item"><Link to='/About' className="nav-link">About</Link></li>
	          <li className="nav-item active"><Link to='/Restaurant' className="nav-link">Restaurants</Link></li>
	          <li className="nav-item"><Link to='/Rooms' className="nav-link">Rooms</Link></li>
	          <li className="nav-item"><Link to='/Contact' className="nav-link">Contacts</Link></li>
	          <li className="nav-item"><Link to='/' className="nav-link">SignIn</Link></li>


        </ul>
        </div>


        </nav>
        <div className="top" style={{ backgroundImage:`url(${img1})` }}>
           

      <h5 className="Expirience">Expirience Epic Beauty</h5>

     

      <div className="container">
    		<div className="row">
      <div className="col-lg-12 pr-1 aside-stretch">
      <form action="#" className="booking-form">
      <div className="row">
      <div className="col-md d-flex py-md-4">
	        				<div className="form-group align-self-stretch d-flex align-items-end">
	        					<div className="wrap bg-white align-self-stretch py-3 px-4">
				    					<label for="#">Check-in Date</label>
				    					<input type="text" className="form-control checkin_date" placeholder="Check-in date"/>
			    					</div>
			    				</div>
	        			</div>


                        <div className="col-md d-flex py-md-4">
	        				<div className="form-group align-self-stretch d-flex align-items-end">
	        					<div className="wrap bg-white align-self-stretch py-3 px-4">
				    					<label for="#">Check-out Date</label>
				    					<input type="text" className="form-control checkout_date" placeholder="Check-out date"/>
			    					</div>
			    				</div>
	        			</div>

                        <div className="col-md d-flex py-md-4">
	        				<div className="form-group align-self-stretch d-flex align-items-end">
	        					<div className="wrap bg-white align-self-stretch py-3 px-4">
			      					<label for="#">Room</label>
			      					<div className="form-field">
			        					<div className="select-wrap">
			                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
			                    <select name="" id="" className="form-control">
			                    	<option value="">Suite</option>
			                      <option value="">Family Room</option>
			                      <option value="">Deluxe Room</option>
			                      <option value="">Classic Room</option>
			                      <option value="">Superior Room</option>
			                      <option value="">Luxury Room</option>
			                    </select>
			                  </div>
				              </div>
				            </div>
		              </div>
	        			</div>

                        <div className="col-md d-flex py-md-4">
	        				<div className="form-group align-self-stretch d-flex align-items-end">
	        					<div className="wrap bg-white align-self-stretch py-3 px-4">
			      					<label for="#">Guests</label>
			      					<div className="form-field">
			        					<div className="select-wrap">
			                    <div className="icon"><span className="ion-ios-arrow-down"></span></div>
			                    <select name="" id="" className="form-control">
			                    	<option value="">1 Adult</option>
			                      <option value="">2 Adult</option>
			                      <option value="">3 Adult</option>
			                      <option value="">4 Adult</option>
			                      <option value="">5 Adult</option>
			                      <option value="">6 Adult</option>
			                    </select>
			                  </div>
				              </div>
				            </div>
		              </div>
	        			</div>

                        <div className="col-md d-flex">
	        				<div className="form-group d-flex align-self-stretch">
                            <Link to='/' className="btn btn-black py-5 py-md-3 px-4 align-self-stretch d-block"><span>Check Availability <small>Best Price Guaranteed!</small></span></Link>
			              </div>
	        			</div>
      </div>
      </form>
      </div>

     

        </div>
        
        </div>
        
        </div>
        

        <section className="ftco-section bg-light ftco-room">
        <div className="container-fluid px-0">
        <div className="row no-gutters justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
        <span className="subheading">Malobisa hotel Rooms</span>
        <h2 className="mb-4">Hotel Master's Rooms</h2>



        </div>


        </div>
        <div className="row no-gutters">

        <div className="col-lg-6">

        <div className="room-wrap">
        <div className="img d-flex align-items-center" style={{ backgroundImage:`url(${img2})` }}>
        <div className="text text-center px-4 py-4">
        <h2>Welcome to <Link to='/'>Malobisa</Link> Hotel</h2>
    							<p>A small river named Umzinyathi flows by their place and supplies it with the necessary regelialia.</p>


        </div>

        </div>
        </div>
        </div>


        <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
        <Link to='/'className="img" style={{ backgroundImage:`url(${img3})` }}></Link>
        <div className="half left-arrow d-flex align-items-center">
        <div className="text p-4 p-xl-5 text-center">
        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
    							<p className="mb-0"><span className="price mr-1">R120.00</span> <span className="per">per night</span></p>
	    						<h3 className="mb-3"><a href="rooms.html">Suite Room</a></h3>
	    						<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
        <Link to='/'className="img order-md-last" style={{ backgroundImage:`url(${img4})` }}></Link>
        <div className="half right-arrow d-flex align-items-center">
        <div className="text p-4 p-xl-5 text-center">

        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
    							<p className="mb-0"><span className="price mr-1">R3000.00</span> <span className="per">per night</span></p>
	    						<h3 className="mb-3"><a href="rooms.html">Family Room</a></h3>
	    						<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
    						
        </div>
        </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
        <Link to='/'className="img order-md-last" style={{ backgroundImage:`url(${img5})` }}></Link>
        <div className="half right-arrow d-flex align-items-center">
        <div className="text p-4 p-xl-5 text-center">
    							<p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
    							<p className="mb-0"><span className="price mr-1">R4000.00</span> <span className="per">per night</span></p>
	    						<h3 className="mb-3"><a href="rooms.html">Deluxe Room</a></h3>
	    						<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
    						</div>
        

       
        </div>
        </div>
        </div>
        <div className="col-lg-6">
        <div className="room-wrap d-md-flex">
        <Link to='/'className="img" style={{ backgroundImage:`url(${img6})` }}></Link>
        <div className="half left-arrow d-flex align-items-center">

        <div className="text p-4 p-xl-5 text-center">

        <p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
    							<p className="mb-0"><span className="price mr-1">R4500.00</span> <span className="per">per night</span></p>
	    						<h3 className="mb-3"><a href="rooms.html">Luxury Room</a></h3>
	    						<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
    						
        </div>
        </div>
            
        </div>
        </div>
        <div className="col-lg-6">

        <div className="room-wrap d-md-flex">
        <Link to='/'className="img" style={{ backgroundImage:`url(${img7})` }}></Link>
        <div className="half left-arrow d-flex align-items-center">
        <div className="text p-4 p-xl-5 text-center">
    							<p className="star mb-0"><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span><span className="ion-ios-star"></span></p>
    							<p className="mb-0"><span className="price mr-1">R5000.00</span> <span className="per">per night</span></p>
	    						<h3 className="mb-3"><a href="rooms.html">Superior Room</a></h3>
	    						<p className="pt-1"><a href="room-single.html" className="btn-custom px-3 py-2">View Room Details <span className="icon-long-arrow-right"></span></a></p>
    						</div>
        </div>
        </div>
        </div>
        </div>

        
        

</div>
        </section>

        <section className="ftco-section ftco-no-pt ftco-no-pb px-0">
        <div className="container-fluid px-0">

        <div className="row no-gutters justify-content-end">
        <div className="col-md-12">
            <div id="home" className="video-hero" style={{ backgroundImage:`url(${img8})` }}>
            <video width="100%" height="100%" controls> 
<source src={vid1} type="video/mp4" /> 
</video>
<div className="container">
<div className="row justify-content-start d-flex align-items-end height-text ">

<div className="col-md-8">

<div className="text">
											<h1>We're Most Recommended Hotel</h1>
										</div>
</div>
</div>
</div>

            </div>

        </div>
        </div>
        </div>

        </section>

        <section className="ftco-section ftco-menu" style={{ backgroundImage:`url(${img9})` }}>
        <div className="container">

        <div className="row justify-content-center mb-5 pb-3">
        <div className="col-md-7 heading-section text-center ftco-animate">
        <span className="subheading">Restaurant</span>
        <h2>Restaurant</h2>
        </div>
        </div>
        <div className="row">
        <div className="col-md-6">
        <div className="pricing-entry d-flex ftco-animate">
        <div className="img order-md-last" style={{ backgroundImage:`url(${img10})` }}></div>
        <div className="desc pr-3 text-md-right">
        <div className="d-md-flex text align-items-center">
	        				<h3 className="order-md-last heading-left"><span>Grilled Crab with Onion</span></h3>
	        				<span className="price price-left">$20.00</span>
	        			</div>
                        <div className="d-block">
                        <p>A small river named Duden flows by their place and supplies</p>
                        </div>
        </div>
        </div>
        </div>
        <div className="pricing-entry d-flex ftco-animate">

        <div className="img order-md-last" style={{ backgroundImage:`url(${img11})` }}>


        </div>
        <div className="desc pr-3 text-md-right">
        <div className="d-md-flex text align-items-center">
        <h3 className="order-md-last heading-left"><span>Grilled Beef with potatoes</span></h3>
	        				<span className="price price-left">$29.00</span>
        </div>
        <div className="d-block">
	        				<p>A small river named Duden flows by their place and supplies</p>
	        			</div>
        </div>
        </div>
        <div className="pricing-entry d-flex ftco-animate">





        </div>
        </div>
        </div>


        </section>
     

    </div>
  );
}

export default Home;
