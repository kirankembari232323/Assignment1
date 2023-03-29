
import { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [userData, setUserData] = useState({});

  const handleSubmit = event => {
    if (event) {
      event.preventDefault();
      const url = "https://reqres.in/api/users"
      const data = userData
      const headers = {
          "Content-Type": "application/json"
      }
      if(userData?.name && userData?.job){
      axios.post(url, data, headers).then((response)=>{
        console.log(response?.data)
        window.alert("User created successfully")
    })
  
      console.log(userData)
    }else{
      window.alert("Please enter data!!!")
    }
  }
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
            <label>Name</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="name"
              value={userData.name}
              placeholder="User Name"
              className="form-control mt-1"
            />
          </div>
          <div className="form-group mt-3">
            <label>Job</label>
            <input
              onChange={handleInputChange}
              type="text"
              name="job"
              value={userData.job}
              className="form-control mt-1"
              placeholder="Enter Job"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">
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
