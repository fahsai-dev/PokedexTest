import React, { Component } from 'react'
import './App.css'
import { COLORS, IMAGES } from './constants';
import { Card } from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container" style={{ backgroundColor: COLORS.Colorless }}>

          <div style={{ width: '100%', height: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <a className="font-42">My Pokedex</a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', height: 600, marginLeft: 20, marginRight: 20, overflow: 'scroll', justifyContent: 'space-between' }}>
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
