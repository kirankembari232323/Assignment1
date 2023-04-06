import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import {UserDataContext} from '../context/UserDataContext';

function Users() {
    const  {users}  = useContext(UserDataContext);
    const[displayTableSTyle, setDisplayTableSTyle] = useState(true);

  return (
    <div>
    <h1> Users List</h1>
    <div className=" align-items-center grid-style">
        <div className="btn-group" style={{ marginBottom: "20px" }}>
        <button  onClick={()=>setDisplayTableSTyle(true)} className="btn btn-sm btn-outline-secondary">Table </button>
        <button  onClick={()=>setDisplayTableSTyle(false)} className="btn btn-sm btn-outline-secondary">Grid</button>
        </div>
    </div>
    {users?.length === 0 && (
        <div className="text-center">
            <h2>No users found at the moment</h2>
        </div>
    )}
   {displayTableSTyle && (<div className="container">
        <div className="row">
            <table className="table table-bordered">
                <thead className="thead-light">
                    <tr> 
                       <th scope="col">id</th>
                        <th scope="col">Firstname</th>
                        <th scope="col">Lastname</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td>
                                <div className=" align-items-center">
                                    <div className="btn-group" style={{ marginBottom: "20px" }}>
                                    <Link to={`/user/${user.id}`} className="btn btn-sm btn-outline-secondary">User Details </Link>
                                    <Link to={`/create`} className="btn btn-sm btn-outline-secondary">Add User </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
    )}
    {!displayTableSTyle && (<div className="profile-container">
        {users?.length &&
          users.map((user) => {
            return (
              <Link to={`/user/${user.id}`} className="avatar-div" key={user.id}>
                <img key={user.avatar} src={user.avatar} alt={user?.first_name} />
                <p className="name-span">
                  <strong>{user.first_name} {user.last_name}</strong>
                </p>
                <p>{user.email}</p>
              </Link>
            );
          })}
      </div>
      )}
</div>
  );
}

export default Users;
