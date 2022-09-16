import React from "react";
import "./Page.css";

function Page() {
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="header-left">
          <img src="./Images/logo.png"></img>
          <p>Live</p>
          <p>Push</p>
          <p>Link</p>
          <p>Shop</p>
          <p>Packs</p>
          <p>Help</p>
          <div className="more-btn-container">
            <span>More</span>
            <img></img>
          </div>
        </div>
        <div className="header-right">
          <p>Try Live for free</p>
          <p>Log in or register</p>
        </div>
      </div>
      <div className="hero-container">
        <div className="sub-menu-container">
          <p>About</p>
          <p>Jobs</p>
          <p>Apprenticeships</p>
        </div>
        <div className="hero-section">
          <img src="./images/header.avif"></img>
        </div>
        <div className="hero-intro-container">
          <div className="hero-intro-base-container">
            <h1>
              We make Live, Push and Link — unique software and hardware
              <br></br> for music creation and performance. With these products,
              our<br></br> community of users creates amazing things.
            </h1>
            <p>
              Ableton was founded in 1999 and released the first version of Live
              in 2001. Our products are used<br></br> by a community of
              dedicated musicians, sound designers, and artists from across the
              world.
            </p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="base-div">
          <div className="card-image-a">
            <img src="./Images/photo-2.jpg"></img>
          </div>
          <div className="card-image-b">
          {/* <img src="./Images/photo-1.jpg"></img> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
