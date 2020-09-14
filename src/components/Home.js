import React from "react";
import "./Home.css";
import profile_pic from "../assets/profile_pic.jpg";

const Home = () => {
  return (
    <div className="container home">
      <div className="row">
        <div className="col mx-5">
          <h1>Hello I'm Edgar!</h1>
          <br />
          <p style={{ textAlign: "justify" }}>
            I'm a software engineer with 3 years of experience. I started my career at Accenture
            before joining a San Francisco based startup as a fullstack developer. In 2020, I quit
            this gig to develop my own web app and freelance in the MERN and e-commerce ecosystems.
          </p>
          <p style={{ textAlign: "justify" }}>
            I'm a disciplined, motivated individual with a self-improvement mentality. When I'm not
            coding or doing tech, I enjoy reading and learning new stuff. I love hiking, running &
            hitting the gym. Hate to cook but I'm working on it.
          </p>
        </div>
        <div className="col" style={{ textAlign: "center" }}>
          <img className="profile_pic" src={profile_pic} />
          <div id="social_handles">
            <a href="https://www.github.com/garosan/" target="_blank">
              <i class="fa fa-github fa-2x" />
            </a>
            <a href="https://www.instagram.com/garosan1/" target="_blank">
              <i class="fa fa-camera-retro fa-2x" />
            </a>
            <a href="https://www.twitter.com/garosan1/" target="_blank">
              <i class="fa fa-twitter-square fa-2x" />
            </a>
            <a href="mailto:garosanchez27@gmail.com">
              <i class="fa fa-envelope fa-2x" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
