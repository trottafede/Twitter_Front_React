import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function CreateTweet({ setUpdatePage }) {
  const { user } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);

  const [tweetText, setTweetText] = useState("");

  const handleCreateTweet = async () => {
    let urlPostTweet = `${process.env.REACT_APP_API_BACKEND}/api/tweets`;
    const createTweet = async () => {
      try {
        await axios.post(
          urlPostTweet,
          { tweetContent: tweetText },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUpdatePage((prevState) => !prevState);
        setTweetText("");
      } catch (error) {
        console.error(error);
      }
    };
    createTweet();
  };
  return (
    <div>
      {user && (
        <div id="QueEstasPensando">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-2 col-2">
              <img
                src={user.image}
                alt={user.firstname + " " + user.lastname}
              />
            </div>
            <div className="col-lg-10 col-md-10 col-sm-10 col-10">
              <div>
                <input
                  className="form-control"
                  value={tweetText}
                  onChange={(e) => setTweetText(e.target.value)}
                  type="text"
                  placeholder="Qué estás pensando?"
                  name="tweet"
                  id="tweet"
                />
                <p>Cualquier persona puede responder</p>
                <hr />
                <div className="d-flex justify-content-around">
                  <i className="far fa-image"></i>
                  <i className="fas fa-gift"></i>
                  <i className="fas fa-question"></i>
                  <i className="fas fa-smile-beam"></i>
                  <i className="fas fa-calendar-times"></i>

                  <button
                    onClick={handleCreateTweet}
                    className="btn btn-primary"
                  >
                    Twittear
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      )}
    </div>
  );
}
