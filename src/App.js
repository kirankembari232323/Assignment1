import React, { useEffect, useState } from "react";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UsersDetails from './components/UsersDetails';
import { UserDataContext } from './context/UserDataContext';
import EditUser from "./components/EditUser";
import { createUserdata, editUserdata, getUser } from "./api/Api";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser(setUsers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const createUser = (userData, event) => {
    return new Promise(function (resolve, reject) {
      createUserdata(userData, event ,users, setUsers,resolve,reject)
    })
  }

  const editUser = (userData, event) => {
    return new Promise(function (resolve, reject) {
      editUserdata(userData, event ,users, setUsers,resolve,reject)
    })
  }

  return (
    <div className="App">
      <UserDataContext.Provider value={{ users, createUser, editUser }}>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={'/'} className="nav-link"> Home </Link></li>
              <li><Link to={'/create'} className="nav-link">Add User</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/user/:id" element={<UsersDetails />} />
            <Route path="/create" element={<CreateUser />} />
            <Route path="/user/edit/:id" element={<EditUser />} />
          </Routes>
        </BrowserRouter>
      </UserDataContext.Provider>
    </div>
  );
}

export default App;
