import "./Login.css";
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    handleIsLoading();
    const url = `${process.env.REACT_APP_API_BACKEND}/api/tokens`;
    const fetchApi = async () => {
      try {
        const response = await axios.post(
          url,
          {
            email,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.status === 200) {
          const { token } = response.data;
          const { user } = response.data;
          dispatch({
            type: "ADD_USER",
            token,
            user,
          });
          handleIsLoading();
          navigate(from, { replace: true });
        }
      } catch (error) {
        alert(error);
        handleIsLoading();
      }
    };

    fetchApi();
  };

  const handleIsLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  return (
    <div id="loginPage" className="container-fluid">
      <div className="row">
        <div id="twitterBG" className="col-lg-6">
          <div id="imgContainer">
            <img
              src="https://raw.githubusercontent.com/trottafede/TwitterEJS-Noviembre2021/main/public/img/twitterBigBird3.png"
              alt="twitter logo"
            />
          </div>
        </div>
        <div id="rightSide" className="col-lg-6">
          <img
            width="50px"
            height="50px"
            src="https://raw.githubusercontent.com/trottafede/TwitterEJS-Noviembre2021/main/public/img/miniTwitter.png"
            alt="twitter_logo"
          />
          <h1>Happening now</h1>
          <h2>Join Twitter today.</h2>

          <div id="formLogin">
            <div className="row mb-3">
              <label htmlFor="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  minLength="4"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  minLength="4"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <button
                onClick={handleSubmit}
                className="btn btn-primary"
                type="button"
              >
                {isLoading && (
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                {"  "}
                Login
              </button>

              <em>
                By signing up, you agree to the Terms of Service and Privacy
                Policy, including Cookie Use.
              </em>
            </div>

            <div className="mb-3">
              <p>
                Do not have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
        <div id="emAboutThings" className="col-lg-12">
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
