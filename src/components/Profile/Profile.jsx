import "./Profile.css";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import Navbar from "../Navbar/Navbar";
import RightSide from "../Home/RightSide";
import EditProfile from "./EditProfile";
import Follow from "../Follow";
export default function Profile() {
  const [user, setUser] = useState(null);

  const loggedUser = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);

  const { username } = useParams();

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BACKEND}/api/users/${username}`;
    const fetchUser = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          // const user = response.data;
          // dispatch({
          //   type: "ADD_USER",
          //   token,
          //   user,
          // });
          setUser(() => response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
    return () => {};
  }, [username, token, loggedUser]);
  return (
    <div>
      {user && (
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-1 col-sm-1 col-1">
              <Navbar />
            </div>
            <div className="col-lg-6 col-md-11 col-sm-11 col-11">
              <div id="inicio">
                <h1>{user.firstname + " " + user.lastname}</h1>
              </div>
              <div id="profileInfo">
                <div className="row">
                  <div className="col-lg-12">
                    <div id="bgImg">
                      <div id="imgContainer">
                        <img src={user.image} alt={user.firstname} />
                      </div>
                    </div>

                    {user.username === loggedUser.user.username ? (
                      <div className="text-end">
                        <a
                          href="/"
                          type="button"
                          className="btn btn-outline-light mt-3"
                          data-bs-toggle="modal"
                          data-bs-target="#editProfileModal"
                          data-bs-whatever="@getbootstrap"
                        >
                          Editar Perfil
                        </a>
                      </div>
                    ) : (
                      <div className="text-end followButton">
                        <Follow User={user} />
                      </div>
                    )}
                    <div id="contactInfo">
                      <h2>{user.firstname + " " + user.lastname}</h2>
                      <em>@{user.username}</em>

                      {user.description ? (
                        <p> {user.description} </p>
                      ) : (
                        <p>
                          Escribe una descripción <a href="/"> aquí</a>
                        </p>
                      )}
                      <em>
                        <i className="fas fa-calendar-alt"></i> Se unió en{" "}
                        {new Date(user.createdAt).toLocaleString("es-US")}
                      </em>
                      <p>
                        {user.following.length} siguiendo -{" "}
                        {user.followers.length} Seguidores
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
              <EditProfile user={user} />
              {user.tweetsList.length > 0 ? (
                user.tweetsList.map((tweet) => (
                  <div key={uuidv4()} className="singleTweet">
                    <div className="row">
                      <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                        <img
                          src={user.image}
                          alt={user.firstname + " " + user.lastname}
                        />
                      </div>
                      <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                        <p>
                          {user.firstname + " " + user.lastname + " "}
                          <em>
                            @{user.username} -{" "}
                            {new Date(tweet.createdAt).toLocaleString("es-US")}
                          </em>
                        </p>
                        <p> {tweet.Text} </p>
                        <div className="d-flex justify-content-around">
                          <em>
                            <i className="far fa-comment"></i> 20
                          </em>
                          <em>
                            <i className="fas fa-retweet"></i> 5
                          </em>
                          {tweet.Likes.includes(loggedUser.user._id) ? (
                            <em>
                              <a href="/likes/destroy/<%- tweet.id %>">
                                <i className="fas fa-heart redHeart"></i>
                              </a>{" "}
                              {tweet.Likes.length}{" "}
                            </em>
                          ) : (
                            <em>
                              <a href="/likes/update/<%- tweet.id %>">
                                <i className="far fa-heart"></i>
                              </a>{" "}
                              {tweet.Likes.length}{" "}
                            </em>
                          )}

                          <i className="fas fa-share"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>You have no tweets</p>
              )}
            </div>
            <div className="col-lg-3">
              <RightSide />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
