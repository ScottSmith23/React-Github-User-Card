import React from 'react';
import axios from 'axios';
import './App.css';
import GhCard from "./components/GhCard"
class App extends React.Component {
  state = {
    cards: []
  };
  componentDidMount() {
    axios
      .get('https://api.github.com/users/ScottSmith23')
      .then(res => {
        this.setState({
          cards: [res.data]
        });
        console.log(res.data)
      })
      .catch(err => console.log(err.message));
    axios
      .get('https://api.github.com/users/ScottSmith23/followers')
      .then (response => {
        console.log(response.data) 
        response.data.forEach(follower => {
          axios.get(follower.url)
      .then (response => {
        this.setState({
          cards: [...this.state.cards, response.data]
        });
        console.log(this.state.cards) 
      
    })})});
  }
  render() {
  return (
    <div className="App">
      <div className="container">
      {this.state.cards.map(user => (
        <GhCard user={user} />
      ))}
      </div>
    </div>
  );
}
}

export default App;
