import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Follow({ User }) {
  const { token } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  const [following, setFollowing] = useState(user.following.includes(User._id));

  const dispatch = useDispatch();

  const handleDestroyFriendship = () => {
    setFollowing((prevState) => !prevState);

    const username = User.username;
    let destroyFriendshipURL = `${process.env.REACT_APP_API_BACKEND}/api/users/destroyFriendship/${username}`;

    const destroyFriendship = async () => {
      try {
        const response = await axios.delete(destroyFriendshipURL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          const user = response.data;
          dispatch({
            type: "ADD_USER",
            token,
            user,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    destroyFriendship();
    return () => {};
  };

  const handleNewFriend = () => {
    setFollowing((prevState) => !prevState);

    const username = User.username;
    let newFriendUrl = `${process.env.REACT_APP_API_BACKEND}/api/users/following/${username}`;

    const addNewFriend = async () => {
      try {
        const response = await axios.patch(
          newFriendUrl,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          const user = response.data;
          dispatch({
            type: "ADD_USER",
            token,
            user,
          });
        }
      } catch (error) {
        console.error(error);
      }
    };
    addNewFriend();
    return () => {};
  };

  return (
    <div>
      {following ? (
        <p
          style={{ color: "#fff" }}
          onClick={handleDestroyFriendship}
          className=" btn btn-outline-danger whiteFont following"
        >
          Unfollow
        </p>
      ) : (
        <p onClick={handleNewFriend} className="btn btn-light following">
          Follow
        </p>
      )}
    </div>
  );
}
