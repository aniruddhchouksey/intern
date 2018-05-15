import React, { Component } from 'react';
import CardList from './CardList';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      albums: []
    }
  }

  componentDidMount() {
    fetch('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => response.json())
      .then(albums => this.setState({albums: albums}));    
  }

  render() {
    return (
      <div className='tc'>
        <div>
          <p className='tc ba br1 ma2 heading'> ALBUMS </p>
          <CardList albums = { this.state.albums } />
        </div>
      </div>
    );
  }
}

export default App;
