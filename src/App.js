import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UsersDetails from './components/UsersDetails';
import { UserDataContext }  from './context/UserDataContext';

function App() {
  const[users, setUsers] = useState([]);

  useEffect(()=>{
      axios.get(`https://reqres.in/api/users`).then((response)=>{
          setUsers(response?.data?.data)
      })
  },[])
  
  return (
  <div className="App">
  <UserDataContext.Provider value={users}>
   <BrowserRouter>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav mr-auto">
        <li><Link to={'/'} className="nav-link"> Home </Link></li>
        <li><Link to={'/create'} className="nav-link">Add User</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={ <Users/> } />
      <Route path="/user/:id" element={ <UsersDetails/> } />
      <Route path="/create" element={ <CreateUser/> } />
    </Routes>
    </BrowserRouter>
    </UserDataContext.Provider>
  </div>

  );
}

export default App;