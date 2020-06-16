import React, { Component } from 'react';
import './App.css';
import { Cards, Chart, CountryPicker } from './components';
// import { fetchData } from './api'

class App extends Component {
  state = {
    val: ''
  }
  handleChange = (e) => {
    this.setState({
      val: e
    })


  }
  // state = {
  //   data: {},
  // }

  // async componentDidMount() {
  //   const dataFetched = await fetchData();
  //   console.log("response", dataFetched)
  //   this.setState({
  //     data: dataFetched
  //   })
  // }
  render() {
    console.log("props", this.state.val)
    return (
      <div className="App">
        <Cards changedVal={this.handleChange} />

        <Chart />
        <CountryPicker />
      </div>
    );
  }
}

export default App;
