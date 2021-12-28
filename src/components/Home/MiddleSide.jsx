import "./MiddleSide.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import LikeButton from "./LikeButton";
import CreateTweet from "./CreateTweet";
import { Link } from "react-router-dom";

export default function TweetsHome() {
  const [tweets, setTweets] = useState([]);
  const [updatePage, setUpdatePage] = useState(false);
  const { token } = useSelector((state) => state.user);

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BACKEND}/api/timeline`;
    const fetchTimeline = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTweets(() => response.data.tweets);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTimeline();
    return () => {};
  }, [token, updatePage]);

  return (
    <div>
      <div id="inicio">
        <h1>Inicio</h1>
      </div>

      <CreateTweet setUpdatePage={setUpdatePage} />

      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div key={uuidv4()} className="singleTweet">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1 col-1">
                <img
                  src={tweet.User.image}
                  alt={tweet.User.firstname + " " + tweet.User.lastname}
                />
              </div>
              <div className="col-lg-11 col-md-11 col-sm-11 col-11">
                <p>
                  <Link to={`/users/${tweet.User.username}`}>
                    {tweet.User.firstname + " " + tweet.User.lastname}
                  </Link>

                  <em>
                    {" "}
                    @{tweet.User.username + " - "}
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
                  <LikeButton tweet={tweet} />
                  <i className="fas fa-share"></i>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No hay tweets, se el primero</p>
      )}
    </div>
  );
}
