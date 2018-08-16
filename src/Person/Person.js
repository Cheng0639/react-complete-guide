import React from "react";
import classes from "./Person.css";

function Person(props) {
  let { name, age, updatePersonHandler, deleteHandler } = props;

  return (
    <div className={classes.Person}>
      <h2>{name}</h2>
      <p>{age}</p>
      <button onClick={deleteHandler}>Delete Me</button>
      <input type="text" onChange={updatePersonHandler} value={name} />
    </div>
  );
}

export default Person;
