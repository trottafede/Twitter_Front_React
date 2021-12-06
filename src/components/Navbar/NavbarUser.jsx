import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function NavbarUser() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch({
      type: "REMOVE_USER",
    });
  };
  return (
    <div>
      {user && (
        <div id="activeUser">
          <div id="leftSideActiveUser">
            <img src={user.image} alt={user.firstname + " " + user.lastname} />
            <div id="activeUserInfo">
              <p>
                {user.firstname} {user.lastname}
              </p>
              <em>@{user.username}</em>
            </div>
          </div>
          <span>
            <i onClick={handleLogout} className="fas fa-times-circle"></i>
          </span>
        </div>
      )}
    </div>
  );
}
