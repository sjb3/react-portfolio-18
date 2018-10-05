import React, { Component } from 'react';
import './App.css';
import {
  Layout, Header, Navigation, Drawer, Content,
} from 'react-mdl';
import Form from './components/Form';
import Temperature from './components/Temperature';
import {H2} from './styled/App.style';
// import { Link } from 'react-router-dom';
// import Main from './components/Main';
// import { Adiv, Bdiv } from './styled/App.style';
// import axios from 'axios';


class App extends Component {
  state = {
    results: []
  }
  getTemperature = async (e) => {
    e.preventDefault();
    const temperatureSearch = e.target.elements.temperatureSearch.value;
    const endPoint = await fetch('https://cors-anywhere.herokuapp.com/https://data.seattle.gov/resource/ivtm-938t.json');

    const data = await endPoint.json();
    // console.log(data[0].recordid);
    this.setState({results:data});
    console.log(this.state.results);
  }

  render() {
    // const timeline=result.datetime.splice(1, 11);
    return (
      <div>
        <Header className="App-header">
        <H2>
Road Weather Information Stations
        </H2>
        </Header>
        <Form getTemperature={this.getTemperature} style={{backgroundColor: 'red'}} />

        {this.state.results.map(result => {
          {/* console.log('???????', typeof(result.datetime)) */}
          return (
            <div>
              <h5>{result.datetime}</h5>
              <p><strong>{result.airtemperature} || {result.roadsurfacetemperature}</strong></p>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
