import React, { Component } from "react";
import classes from "./App.css";

import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 28 },
      { id: 2, name: "Manu", age: 29 },
      { id: 3, name: "Stephanie", age: 26 }
    ],
    showPersons: true
  };

  render() {
    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi I'm a react app</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button
          className={this.state.showPersons()}
          onClick={this.tooglePersonsHadnler}
        >
          {this.state.showPersons ? "Hide the persons" : "Show the perons"}
        </button>
        {this.renderPersons()}
      </div>
    );
  }

  tooglePersonsHadnler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  addPersonHandler = name => {};

  updatePersonHandler = (id, name) => {
    let newPersons = [...this.state.persons];

    let needChangePersonIndex = newPersons.findIndex(
      person => person.id === id
    );
    newPersons[needChangePersonIndex].name = name;

    this.setState({
      persons: newPersons
    });
  };

  deletePersonHandler = index => {
    let newPersons = [...this.state.persons];

    let removeIndex = newPersons.findIndex(person => person.id === index);
    newPersons.splice(removeIndex, 1);

    this.setState({
      persons: newPersons
    });
  };

  renderPersons = () => {
    let { persons, showPersons } = this.state;
    if (showPersons) {
      return <div>{persons.map(person => this.renderPerson(person))}</div>;
    } else {
      return <h1>Not Showing Perons</h1>;
    }
  };

  renderPerson = person => (
    <Person
      key={person.id}
      name={person.name}
      age={person.age}
      updatePersonHandler={e =>
        this.updatePersonHandler(person.id, e.target.value)
      }
      deleteHandler={this.deletePersonHandler.bind(this, person.id)}
    />
  );
}

export default App;
