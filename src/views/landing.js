import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './landing.css'

const Landing = (props) => {
  return (
    <div className="landing-container">
      <Helmet>
        <title>Shift Landing</title>
        <meta property="og:title" content="Shift Landing" />
      </Helmet>
      <div className="landing-hero">
        <div className="landing-container1">
          <Link to="/" className="landing-navlink">
            <img
              alt="image"
              src="/external/shiftlogo%20copy-200w.png"
              className="landing-image"
            />
          </Link>
          <div className="landing-card">
            <h1 className="landing-text">AI-Powered Talent Matching.</h1>
            <h1 className="landing-text01">Find the best</h1>
            <span className="landing-text02">
              <span>
                Shift Technologies is developing an AI-powered talent matching
                system that can identify the best candidates, including those
                with unconventional abilities and untapped potential.
              </span>
              <span className="landing-text04">
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <br></br>
              <span>
                Currently situating our company to be open to pre-seed
                investment through the NDRC Republic of Work&apos;s
                pre-accelerator.
              </span>
              <br></br>
              <br></br>
              <span>Discussions, futures, and beta testing starts here:</span>
              <br></br>
            </span>
            <div className="landing-container2">
              <input
                type="text"
                placeholder="Email here"
                className="landing-textinput Small input"
              />
              <button type="button" className="landing-button button">
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxibHVlJTIwdGVjaCUyMGFic3RyYWN0fGVufDB8fHx8MTY5NDcwOTg2M3ww&amp;ixlib=rb-4.0.3&amp;h=800"
        className="landing-image1"
      />
      <section className="landing-features">
        <div className="landing-container3">
          <img
            alt="image"
            src="/external/microchip-icon-1400w.png"
            className="landing-image2"
          />
          <h5 className="landing-text12 HeadingThree">AI-Powered</h5>
          <span className="landing-text13">
            <span>
              AI-powered talent matching system that can efficiently and
              accurately identify the best candidates, highlighting those with
              unconventional abilities and untapped potential.
            </span>
            <br></br>
          </span>
        </div>
        <div className="landing-container4">
          <img
            alt="image"
            src="/external/euro-coin-solid-icon-1400w.png"
            className="landing-image3"
          />
          <h5 className="landing-text16 HeadingThree">Cost-Effective</h5>
          <span className="landing-text17">
            Accurate AI-talent matching brings you the best matches, optimizes
            and shortens the process, significantly reducing cost of hiring.
          </span>
        </div>
        <div className="landing-container5">
          <img
            alt="image"
            src="/external/hand-watch-icon-1400w.png"
            className="landing-image4"
          />
          <h5 className="landing-text18 HeadingThree">Time-Efficent</h5>
          <span className="landing-text19">
            <span>
              Hiring new individuals the old way can take months, smaller but
              more accurate pools of talent and effective coordination process
              will have you onboarding in weeks rather than months.
            </span>
            <br></br>
          </span>
        </div>
        <div className="landing-container6">
          <img
            alt="image"
            src="/external/settings-line-icon-1400w.png"
            className="landing-image5"
          />
          <h5 className="landing-text22 HeadingThree">Process Management</h5>
          <span className="landing-text23">
            A fully integrated talent matching system optimizing communication,
            setting up meeting times, and effectively tracking the hiring
            process on both ends; no more email chains and lost video call
            links.
          </span>
        </div>
      </section>
      <section className="landing-testimonials">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1619252584172-a83a949b6efd?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDM3fHx3aGl0ZSUyMGJsdWUlMjBhYnN0cmFjdHxlbnwwfHx8fDE2OTQ5NjUyNzV8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="landing-image6"
        />
        <img alt="image" src="/top.svg" className="landing-top-wave-image" />
      </section>
      <footer className="landing-footer">
        <div className="landing-container7">
          <div className="landing-container8">
            <span className="landing-text24">Shift</span>
            <span>Copyright © 2023 Soft by Shift Technologies.</span>
          </div>
          <Link to="/privacy-policy" className="landing-navlink1">
            Privacy Policy
          </Link>
          <Link to="/terms" className="landing-navlink2">
            Terms and Conditions
          </Link>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1582447780387-b2f4d393ad81?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwMnx8d2hpdGUlMjBhYnN0cmFjdHxlbnwwfHx8fDE2OTQ5ODkyMzh8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="landing-image7"
        />
      </footer>
    </div>
  )
}

export default Landing
