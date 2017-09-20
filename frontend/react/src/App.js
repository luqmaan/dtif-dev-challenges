import React, { Component } from 'react';
import './App.css';
import data from './example.json';

import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    // Here is a link to the API Documentation: https://dev.socrata.com/
    axios.get('https://data.austintexas.gov/resource/h8x4-nvyi.json')
      .then((res) => {
        console.log(res);
        // TODO: Decided how to store the response data.
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Dangerous Dogs</h2>
        </div>

        <div className="App-intro">
          {/* TODO: Pull in data from API endpoint instead of static json file. */}
          { data.map((dog, i) => {
            return (
              <div style={{ textAlign: 'left', paddingLeft: '40px', marginTop: '40px' }} key={i}>
                <p>Description: {dog.description_of_dog}</p>
                <p>Owned by: {dog.first_name} {dog.last_name}</p>
                <p>Lives at: {dog.location_address}, {dog.location_zip}</p>
              </div>
            )
          }) }

          {/* TODO: Delete block below */}
          <p style={{ marginTop: '50px', fontStyle: 'italic', color: 'grey' }}>
            Open Dev Tools Console to see API data.
          </p>
        </div>
      </div>

    );
  }
}

export default App;
