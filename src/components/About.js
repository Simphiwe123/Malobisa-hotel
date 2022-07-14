import React from 'react';
import './About.css';
import img1 from '../images/bg_1.jpg';
import vid1 from "../images/Metropole Hotel Le Club Hanoi - Restaurant Design by GEMA - Video Showcase.mp4";
import './Home.css';
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Restaurant from "./Restaurant";
import Rooms from "./Rooms";
import img2 from "../images/bg_2.jpg";
//import img2 from '../images/IMG.png';images/bg_2.jpg


export default function () {
  return (
    <div className='bbody'>
  

    <nav class="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div class="container">
	      <a class="navbar-brand" href="index.html">MALOBISA HOTEL</a>
	      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span class="oi oi-menu"></span> Menu
	      </button>
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
	    </div>






      <div class="hero-wrap" style={{ backgroundImage:`url(${img1})` }}>
      <div class="overlay"></div>
      <div class="container">
        <div class="row no-gutters slider-text d-flex align-itemd-end justify-content-center">
          <div class="col-md-9 ftco-animate text-center d-flex align-items-end justify-content-center">
          	<div class="text">
	            <h1 class="mb-4 bread">About us</h1>
            </div>
          </div>
        </div>
      </div>
    </div>






	  </nav>
    
    
    
    <section class="ftco-section ftc-no-pb ftc-no-pt">
			<div class="container">
				<div class="row">
					<div class="col-md-5 p-md-5 img img-2 img-3 d-flex justify-content-center align-items-center" style={{ backgroundImage:`url(${img2})` }}>
					<video width="100%" height="100%" controls> 
<source src={vid1} type="video/mp4" /> 
</video>
					</div>
					<div class="col-md-7 py-5 wrap-about pb-md-5 ftco-animate">
	          <div class="heading-section heading-section-wo-line pt-md-5 mb-5">
	          	<div class="ml-md-0">
		          	<span class="subheading">Welcome to Roxandrea Hotel</span>
		            <h2 class="mb-4">Welcome To Our Hotel</h2>
	            </div>
	          </div>
            <div class="pb-md-5">
							<p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
							<p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
							<ul class="ftco-social d-flex">
                <li class="ftco-animate"><a href="#"><span class="icon-twitter"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-facebook"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-google-plus"></span></a></li>
                <li class="ftco-animate"><a href="#"><span class="icon-instagram"></span></a></li>
              </ul>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}
