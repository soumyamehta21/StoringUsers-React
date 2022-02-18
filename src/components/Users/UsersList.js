import React, { useState } from "react";
import classes from "./UsersList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
    // console.log(props.users[0].name);
  return (
    // we already have card css but we are also adding the userlist css by using classes.users
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => {
          return <li key={user.id}>
            {user.name} ({user.age} Years Old)
          </li>;
        })}
      </ul>
    </Card>
  );
};

export default UserList;
