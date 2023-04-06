
import { useState,useContext } from "react";
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from "../context/UserDataContext";

function CreateUser() {
  const navigate = useNavigate();
  const  {createUser} = useContext(UserDataContext);
  const [userData, setUserData] = useState({});
  const [validation, setValidation] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: ""
  });

  const checkValidation = () => {
    let errors = JSON.parse(JSON.stringify(validation));

    //first Name validation
    if (!userData.first_name) {
      errors.first_name = "First name is required";
    } else {
      errors.first_name = "";
    }
    //last Name validation
    if (!userData.last_name) {
      errors.last_name = "Last name is required";
    } else {
      errors.last_name = "";
    }

    // email validation
    const emailCond =
    '[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
    if (!userData.email) {
      errors.email = "Email is required";
    } else if (!userData.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //avatar validation
    if (!userData.avatar) {
      errors.avatar = "Avatar is required";
    } else {
      errors.avatar = "";
    }
    setValidation(errors);
  };



  const handleSubmit = event => {
     // checkValidation()
    createUser(userData,event).then(()=>{
      //if(isUserAdded){
        navigate('/')
   // }
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
            <p className="error">{validation?.first_name}</p>
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
            <p className="error">{validation?.last_name}</p>
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
            <p className="error">{validation?.email}</p>
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
            <p className="error">{validation?.avatar}</p>
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
