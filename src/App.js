import React from 'react';
import './App.css';
import contacts from './contacts.json';
import CardActor from './CardActor'


class App extends React.Component {
  state = {
    actors: [contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]]
  }

  AddContact = () => {
    const randomIndexActors = Math.round(Math.random() * (contacts.length - 1) + 1);
    const actorsCopy = this.state.actors;
    actorsCopy.push(contacts[randomIndexActors])
    console.log("Hello", randomIndexActors);
    this.setState({
      actors: actorsCopy
    })
  };

  render() {
    console.log(this.state.actors);
    return (
      <div className="App" >
        <button onClick={this.AddContact}>Add a random contact</button>
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
              return (<tr>
                <td><img src={contacts[i].pictureUrl} /></td>
                <td>{contacts[i].name}</td>
                <td>{contacts[i].popularity}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;