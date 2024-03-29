import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function TwittearButton() {
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
        // setUpdatePage((prevState) => !prevState);
        window.location.reload();

        setTweetText("");
      } catch (error) {
        console.error(error);
      }
    };
    createTweet();
  };
  return (
    <div
      className="modal fade bgGrey"
      id="twittearModal"
      tabIndex="-1"
      aria-labelledby="twittearModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen-sm-down">
        <div className="modal-content bgBlack">
          <div className="modal-header">
            <h5 className="modal-title" id="twittearModalLabel">
              <span type="button" data-bs-dismiss="modal">
                <i className="far fa-times-circle"></i>
              </span>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {user && (
              <div id="QueEstasPensandoModal">
                <div className="row">
                  <div className="col-lg-2">
                    <img
                      src={user.image}
                      alt={user.firstname + " " + user.lastname}
                    />
                  </div>
                  <div className="col-lg-10">
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
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="modal-footer d-flex justify-content-around">
            <i className="far fa-image"></i>
            <i className="fas fa-gift"></i>
            <i className="fas fa-question"></i>
            <i className="fas fa-smile-beam"></i>
            <i className="fas fa-calendar-times"></i>
            <button onClick={handleCreateTweet} className="btn btn-primary">
              Twittear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
