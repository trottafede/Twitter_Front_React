import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

export default function TweetsHome() {
  const [tweets, setTweets] = useState([]);
  const { token } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  //   api/timeline

  useEffect(() => {
    let url = `${process.env.REACT_APP_API_BACKEND}/api/timeline`;
    const fetchTimeline = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setTweets(() => response.data.tweets);
      } catch (error) {
        console.error(error);
      }
    };
    fetchTimeline();
    return () => {};
  }, [token]);
  console.log(tweets);
  return (
    <div>
      {tweets.length > 0 ? (
        tweets.map((tweet) => (
          <div key={uuidv4()} className="singleTweet">
            <div className="row">
              <div className="col-lg-1">
                <img
                  src={tweet.User.image}
                  alt={tweet.User.firstname + " " + tweet.User.lastname}
                />
              </div>
              <div className="col-lg-11">
                <p>
                  <a href="/users/tweet.User.username">
                    {tweet.User.firstname + " " + tweet.User.lastname}
                  </a>
                  <em>
                    {" "}
                    @ {tweet.User.username + " - "}
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
                  {tweet.Likes.includes(user._id) ? (
                    <em>
                      <a href="/likes/destroy/<%- tweet.id %>">
                        <i className="fas fa-heart redHeart"></i>
                      </a>
                      {" " + tweet.Likes.length}
                    </em>
                  ) : (
                    <em>
                      <a href="/likes/update/<%- tweet.id %>">
                        <i className="far fa-heart"></i>
                      </a>
                      {" " + tweet.Likes.length}
                    </em>
                  )}
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
