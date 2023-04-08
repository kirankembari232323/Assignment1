
import { useState, useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from "../context/UserDataContext";

function CreateUser() {
  const navigate = useNavigate();
  const { createUser } = useContext(UserDataContext);
  const [userData, setUserData] = useState({});

  const handleSubmit = event => {
    createUser(userData, event).then(() => {
      navigate('/')
    })
  };

  const handleInputChange = event => {
    event.persist();
    setUserData(userData => ({
      ...userData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="create-user">
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Create User</h3>
            <div className="form-group mt-3">
              <label>First Name <span className="red">*</span></label>
              <input
                onChange={handleInputChange}
                type="text"
                name="first_name"
                value={userData.first_name}
                placeholder="User Name"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>last Name <span className="red">*</span></label>
              <input
                onChange={handleInputChange}
                type="text"
                name="last_name"
                value={userData.last_name}
                placeholder="User Name"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email <span className="red">*</span></label>
              <input
                onChange={handleInputChange}
                type="email"
                name="email"
                value={userData.email}
                placeholder="User Name"
                className="form-control mt-1"
              />
            </div>
            <div className="form-group mt-3">
              <label>Image Url <span className="red">*</span></label>
              <input
                onChange={handleInputChange}
                type="text"
                name="avatar"
                value={userData.avatar}
                className="form-control mt-1"
                placeholder="Enter Job"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateUser;
