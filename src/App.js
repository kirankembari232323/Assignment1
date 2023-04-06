import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Users from './components/Users';
import CreateUser from './components/CreateUser';
import UsersDetails from './components/UsersDetails';
import { UserDataContext }  from './context/UserDataContext';

function App() {
  const api = `https://reqres.in/api/users`
  const[users, setUsers] = useState([]);
  const[isUserAdded, setIsUserAdded] = useState(false);
 
  useEffect(()=>{
      getUser()
  },[])
  
  const getUser = () =>{
    axios.get(api).then((response)=>{
          setUsers(response?.data?.data)
      })
  }

  const createUser = (userData,event) =>{
    var promise = new Promise(function(resolve, reject) {
    if (event) {
      event.preventDefault();
    const url = api
    const data = {...userData,id:users.length+1}
    const headers = {
        "Content-Type": "application/json"
    }

    if(userData?.first_name && userData?.last_name && userData?.email && userData?.avatar){
    axios.post(url, data, headers).then((response)=>{
      console.log(response?.data)
      window.alert("User created successfully")
      resolve("Promise resolved successfully");
      setIsUserAdded(true)
      setUsers([...users,data]);
  })
  }else{
    window.alert("Please enter data!!!")
    reject(Error("Promise rejected"));
    setIsUserAdded(true)
    }
  }
})
   return promise
}
  
  return (
  <div className="App">
  <UserDataContext.Provider value={{users,createUser,isUserAdded}}>
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
