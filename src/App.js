import React from 'react';
import './App.css';
import contacts from './contacts.json';
import CardActor from './CardActor'


class App extends React.Component {
  state={
    actors:[contacts[0],contacts[1],contacts[2],contacts[3],contacts[4]]
  }

  AddContact = () => {
const randomIndexActors =Math.round(Math.random() * (contacts.length - 1) + 1);
console.log("Hello",randomIndexActors);
this.setState({
actors: contacts[randomIndexActors]
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
          <th>Ironcontacts</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>Picture</td>
          <td>Name</td>
          <td>Popularity</td>
      </tr>
      <tr>
          <td><img src={contacts[0].pictureUrl}/></td>
          <td>{contacts[0].name}</td>
          <td>{contacts[0].popularity}</td>
      </tr>
      <tr>
          <td><img src={contacts[1].pictureUrl}/></td>
          <td>{contacts[1].name}</td>
          <td>{contacts[1].popularity}</td>
      </tr>
      <tr>
          <td><img src={contacts[2].pictureUrl}/></td>
          <td>{contacts[2].name}</td>
          <td>{contacts[2].popularity}</td>
      </tr>
      <tr>
          <td><img src={contacts[3].pictureUrl}/></td>
          <td>{contacts[3].name}</td>
          <td>{contacts[3].popularity}</td>
      </tr>
      <tr>
          <td><img src={contacts[4].pictureUrl}/></td>
          <td>{contacts[4].name}</td>
          <td>{contacts[4].popularity}</td>
      </tr>
      <tr>
      {this.state.actors.map(actors =>{
          return < CardActor key={actors.id}/>
                                      }               
                            )
      } 
      </tr>
  </tbody>
</table>
</div>
    );
  }
}

export default App;