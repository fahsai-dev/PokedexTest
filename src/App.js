import React, { Component } from 'react'
import './App.css'
import { COLORS, IMAGES } from './constants';
import { Card, Modal } from './components';

const App = () => {

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="App">
      <div className="container">
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

        <div
          className="buttonAdd"
          style={{ backgroundColor: COLORS.Fire }}
          onClick={() => setShowModal(true)}
        >
          <a style={{ color: COLORS.Colorless }}>+</a>
        </div>

        <Modal
          isShow={showModal}
          onClose={() => { setShowModal(false) }}
        />
      </div>
    </div>
  )
}


export default App
