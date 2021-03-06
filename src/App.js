import React, { Component } from 'react'
import './App.css'
import { COLORS, IMAGES } from './constants';
import { Card } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ backgroundColor: COLORS.Colorless }}>

          <div className="headerBar">
            <a className="font-42">My Pokedex</a>
          </div>

          <div className="flexRow list">
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
            <Card width="49%" />
          </div>

          <div className="buttonAdd" style={{ backgroundColor: COLORS.Fire }}>
            <a style={{ color: COLORS.Colorless }}>+</a>
          </div>
        </div>
      </div>
    )
  }
}

export default App
