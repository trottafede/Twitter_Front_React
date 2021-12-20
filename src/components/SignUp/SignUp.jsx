import "./SignUp.css";
import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div class="container-fluid">
      <div class="row">
        <div id="twitterBG" class="col-lg-6">
          <div id="imgContainer">
            <img
              src="https://raw.githubusercontent.com/trottafede/TwitterEJS-Noviembre2021/main/public/img/twitterBigBird3.png"
              alt="twitter logo"
            />
          </div>
        </div>
        <div id="rightSide" class="col-lg-6">
          <img
            width="50px"
            height="50px"
            src="https://raw.githubusercontent.com/trottafede/TwitterEJS-Noviembre2021/main/public/img/miniTwitter.png"
            alt="twitter_logo"
          />

          <div id="formLogin">
            <form action="/signup" method="post">
              <div class="row mb-3">
                <label for="firstname" class="col-sm-2 col-form-label">
                  Name
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="firstname"
                    name="firstname"
                    required
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="lastname" class="col-sm-2 col-form-label">
                  Lastname
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="lastname"
                    name="lastname"
                    required
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="username" class="col-sm-2 col-form-label">
                  Username
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    required
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="email" class="col-sm-2 col-form-label">
                  Email
                </label>
                <div class="col-sm-10">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>
              </div>

              <div class="row mb-3">
                <label for="password" class="col-sm-2 col-form-label">
                  Password
                </label>
                <div class="col-sm-10">
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    required
                  />
                </div>
              </div>

              <div class="mb-3">
                <button class="btn btn-primary" type="submit">
                  Register
                </button>
              </div>

              <div class="mb-3">
                <p>
                  Already have an account? <Link to="/login">Login in</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
        <div id="emAboutThings" class="col-lg-12">
          <em>About</em>
          <em>Help Center</em>
          <em>Terms of Service</em>
          <em>Privacy Policy</em>
          <em>Cookie Policy</em>
          <em>Ads info</em>
          <em>Blog</em>
          <em>Status</em>
          <em>Careers</em>
          <em>Brand Resources</em>
          <em>Adversiting</em>
          <em>Marketing</em>
          <em>Twitter for Business</em>
          <em>Developers</em>
          <em>Directory</em>
          <em>Settings</em>
        </div>
      </div>
    </div>
  );
}
