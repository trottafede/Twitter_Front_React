import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function LikeButton({ tweet }) {
  const { token } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const [liked, setLiked] = useState(tweet.Likes.includes(user._id));
  const [likedLength, setLikedLength] = useState(tweet.Likes.length);

  const handleLikeButton = async (id) => {
    let likeFetch = `${process.env.REACT_APP_API_BACKEND}/api/likes/${id}`;
    try {
      setLiked(() => true);
      setLikedLength((prevState) => prevState + 1);
      await axios.patch(
        likeFetch,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const handleDestroyFriendship = async (id) => {
    let deleteLike = `${process.env.REACT_APP_API_BACKEND}/api/likes/${id}`;
    try {
      setLiked(() => false);
      setLikedLength((prevState) => prevState - 1);
      await axios.delete(deleteLike, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {liked ? (
        <em>
          <i
            style={{
              cursor: "pointer",
            }}
            onClick={() => handleDestroyFriendship(tweet._id)}
            className="fas fa-heart redHeart"
          ></i>
          {" " + likedLength}
        </em>
      ) : (
        <em>
          <i
            style={{
              cursor: "pointer",
            }}
            onClick={() => handleLikeButton(tweet._id)}
            className="far fa-heart"
          ></i>
          {" " + likedLength}
        </em>
      )}
    </div>
  );
}
