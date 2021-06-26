import React from 'react';
import './App.css';
import contacts from './contacts.json';
import CardActor from './CardActor'


class App extends React.Component {
  state = {
    actors: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  delete = id => {
    const actorsCopy = [...this.state.actors];
    const actorIndex = actorsCopy.findIndex(item => item.id === id);
    actorsCopy.splice(actorIndex, 1);

    this.setState({
      actors: actorsCopy,

    })
  }




  SortPopularity = () => {
    const actorsCopy = [...this.state.actors];
    console.log("acteur", actorsCopy)
    actorsCopy.sort(function (a, b) {
      return b.popularity - a.popularity;
    })
    this.setState({
      actors: actorsCopy
    })
  };

  SortName = () => {
    const actorsCopy = [...this.state.actors];
    console.log("acteur", actorsCopy)
    actorsCopy.sort(function (a, b) {
      if (a.name < b.name) {
        return -1
      } else if (a.name > b.name) {
        return 1
      } else {
        return 0
      }
    })
    this.setState({
      actors: actorsCopy
    })
  };

  AddContact = () => {
    const randomIndexActors = Math.round(Math.random() * (contacts.length - 1) + 1);
    const actorsCopy = [...this.state.actors];
    actorsCopy.push(contacts[randomIndexActors])
    // console.log("Hello", randomIndexActors);
    this.setState({
      actors: actorsCopy
    })
  };

  render() {
    //console.log(this.state.actors);
    return (
      <div className="App" >
        <button onClick={this.AddContact}>Add a random contact</button>
        <button onClick={this.SortName}>Name</button>
        <button onClick={this.SortPopularity}>Popularity</button>
        <table>
          <thead>
            <tr>
              <td>Picture</td>
              <td>Name</td>
              <td>Popularity</td>
            </tr>
          </thead>
          <tbody>
            {this.state.actors.map((actor, i) => {
              return (<tr key={actor.id}>
                <td><img src={actor.pictureUrl} /></td>
                <td>{actor.name}</td>
                <td>{actor.popularity}</td>
                <td><button onClick={(e) => this.delete(actor.id)}>Delete</button></td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;