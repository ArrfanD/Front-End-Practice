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
            <img src="./Images/photo-1.jpg"></img>
          </div>
        </div>
      </div>

      <div className="hero-intro-container">
        <div className="hero-intro-base-container">
          <h1>
            Making music isn’t easy. It takes time, effort, and learning. But
            <br></br> when you’re in the flow, it’s incredibly rewarding.
          </h1>
          <p>
            We feel the same way about making Ableton products. The driving
            force behind Ableton is our<br></br> passion for what we make, and
            the people we make it for.
          </p>
        </div>
      </div>

      <div className="video-container">
        <iframe
          width="770"
          height="500"
          src="https://www.youtube.com/embed/9SbnhgjeyXA?controls=0&amp;start=64"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>Why Ableton - Juanpe Bolivar</p>
      </div>

      <div className="hero-intro-container-two">
        <div className="hero-intro-base-container">
          <h1 className="test">
            We are more than 350 people from 30 different countries<br></br>{" "}
            divided between our headquarters in Berlin and our offices in
            <br></br> Los Angeles and Tokyo.
          </h1>
          <p>
            Most of us are active musicians, producers, and DJs, and many of us
            use Live and Push every day.<br></br> We come from a wide range of
            cultural and professional backgrounds. Some of us have PhDs,
            <br></br> some are self-taught, and most of us are somewhere in
            between. What connects us is the shared<br></br> belief that each of
            us has the skills and knowledge to contribute to something big:
            helping to shape<br></br> the future of music culture.
          </p>
        </div>
      </div>

      <div className="image-container-two">
        <div className="base-div-two">
          <img src="./Images/photo-3.jpg" id="image-one"></img>
          <img src="./Images/photo-4.jpg" id="image-two"></img>
          <img src="./Images/photo-5.jpg" id="image-three"></img>
        </div>
      </div>

      <div className="hero-intro-container-two">
        <div className="hero-intro-base-container">
          <h1 className="test">
            We believe it takes focus to create truly outstanding instruments.
            <br></br> We only work on a few products and we strive to make them
            <br></br> great.
          </h1>
          <p>
            Rather than having a one-size-fits-all process, we try to give our
            people what they need to work<br></br> their magic and grow. We’ve
            learned that achieving the best results comes from building teams
            that<br></br> are richly diverse, and thus able to explore problems
            from a wider set of perspectives. We don’t<br></br> always agree
            with each other, but opinion and debate are valued and openly
            encouraged.
          </p>
        </div>
      </div>
      <img src="./images/meet-the-makers.avif" id="makers-id"></img>

      <div className="hero-intro-container-two">
        <div className="hero-intro-base-container">
          <h1 className="test">
            We’re passionate about what we do, but we’re equally<br></br>{" "}
            passionate about improving who we are.
          </h1>
          <p>
            We work hard to foster an environment where people can grow both
            personally and professionally,<br></br> and we strive to create a
            wealth of opportunities to learn from and with each other.
            <br></br>
            <br></br>
            Alongside an internal training program, employees are actively
            supported in acquiring new<br></br> knowledge and skills, and
            coached on applying these in their daily work. In addition, staff-
            <br></br>organized development and music salons are a chance to
            discuss new technologies, production<br></br> techniques and best
            practices.
          </p>
        </div>
      </div>

      <div className="main-box-div">
        <div className="background-box-div"></div>
        <div className="box-container">
          <div className="left-image">
            <img src="./Images/photo-6-a.jpg"></img>
          </div>
          <div className="right-image">
            <img src="./Images/photo-7.jpg"></img>
          </div>
        </div>
      </div>

      <div className="hero-intro-container-two">
        <div className="hero-intro-base-container">
          <h1 className="test">
            We want our employees to love it here. Since we’re looking for
            <br></br> exceptional talent from around the world, we will do
            everything<br></br> we can to make your transition as easy as
            possible.
          </h1>
          <p>
            If you're joining us in Berlin, we'll help with relocation and
            paperwork. We’ll even provide you with<br></br> free German or
            English lessons. Plus, working in Germany means you can expect
            comprehensive<br></br> health insurance for you and your family, as
            well as generous maternity and paternity leave. Office<br></br>{" "}
            hours are flexible, but it’s not all work; we have several company
            and team outings throughout the<br></br> year as well as a variety
            of fun, informal small-group activities.
          </p>
        </div>
      </div>
      <div className="jobs-div">
        <div className="jobs-image-div">
          <img src="./Images/photo-8.jpg" id="jobs-image"></img>
        </div>
        <div className="jobs-button-div">
          <div className="centering-div">
          <p>
            We’re really proud of the work<br></br> we’ve done so far. But
            there’s so<br></br> much more to come. If you’d like<br></br> to be
            a part of it, please join us.
          </p>
          <p>See latest jobs ></p>
          </div>
        </div>
      </div>
      <div className="jobs-gap-div">
      </div>
      <hr></hr>
    </div>
  );
}

export default Page;
