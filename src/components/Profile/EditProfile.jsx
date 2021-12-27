import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router";

export default function EditProfile({ user }) {
  const { token } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [firstname, setFirstName] = useState(user.firstname);
  const [lastname, setLastName] = useState(user.lastname);
  const [age, setAge] = useState(user.age ? user.age : 0);
  const [description, setDescription] = useState(
    user.description ? user.description : "Ingrese description"
  );
  const [image, setImage] = useState(user.image);
  const [isLoading, setIsLoading] = useState(false);

  const { username } = useParams();

  let location = useLocation();
  let from = location.state?.from?.pathname || `/users/${user.username}`;

  const handleIsLoading = () => {
    setIsLoading((prevState) => !prevState);
  };

  const handleEditProfile = async () => {
    handleIsLoading();
    let url = `${process.env.REACT_APP_API_BACKEND}/api/users/${username}`;
    try {
      const response = await axios.patch(
        url,
        { firstname, lastname, age, description, image },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        const user = response.data;
        console.log(user);
        dispatch({
          type: "ADD_USER",
          token,
          user,
        });
        handleIsLoading();
        document.getElementById("closeModal").click();

        // navigate(from, { replace: true });
      }
    } catch (error) {
      console.error(error);
      handleIsLoading();
    }
  };
  return (
    <div
      className="modal fade bgGrey"
      id="editProfileModal"
      tabIndex="-1"
      aria-labelledby="editProfileModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content bgBlack">
          <div className="modal-header">
            <h5 className="modal-title" id="editProfileModalLabel">
              Editar Perfil
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="firstname" className="col-form-label">
                Nombre
              </label>
              <input
                type="text"
                value={firstname}
                onChange={(e) => setFirstName(e.target.value)}
                name="firstname"
                className="form-control"
                id="firstname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastname" className="col-form-label">
                Apellido
              </label>
              <input
                type="text"
                value={lastname}
                onChange={(e) => setLastName(e.target.value)}
                name="lastname"
                className="form-control"
                id="lastname"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="col-form-label">
                Edad
              </label>
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                type="number"
                name="age"
                className="form-control"
                id="age"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="col-form-label">
                Descripción
              </label>
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                name="description"
                className="form-control"
                id="description"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="col-form-label">
                Imágen
              </label>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                type="text"
                name="image"
                className="form-control"
                id="image"
              />
            </div>
            <div className="modal-footer">
              <button
                id="closeModal"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <button
                onClick={handleEditProfile}
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
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
