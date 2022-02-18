import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import React, { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge, uid) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge, id: uid }];
    });
  };

  // console.log(usersArray);

  return (
    <>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={usersList}></UsersList>
    </>
  );
}

export default App;
