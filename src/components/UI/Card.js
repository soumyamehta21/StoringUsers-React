import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    // ahiya aapde 2 class add kariye che 1)'./Card.module.css' ane bijo che props mathi aavelo AddUser vada component mathi

    //props.children AddUser.js ma card niche che ae badha children kehvay card na.

    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
