import React, { Component } from 'react'
import { observer } from "mobx-react-lite";
import './App.css'
import { COLORS } from './constants';
import { Card, Modal } from './components';
import { PokemonContext } from './context';

const App = () => {
  const pokemonStore = React.useContext(PokemonContext);
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="App">
      <div className="container">
        <div className="headerBar">
          <a className="font-42">My Pokedex</a>
        </div>

        <div className="flexRow list" >
          {
            pokemonStore.myList.map((item) => (
              <Card
                width="49%"
                key={item.id}
                imageUrl={item.imageUrl}
                name={item.name}
                hp={item.hp}
                attacks={item.attacks ? item.attacks.length : 0}
                weakness={item.weaknesses ? item.weaknesses.length : 0}
                onClickRemove={() => { pokemonStore.removeItemMyList(item.id) }}
              />
            ))
          }
        </div>

        <div
          className="pointer"
          style={{ backgroundColor: COLORS.Fire, width: '100%', height: 68, position: 'absolute' }}
          onClick={() => setShowModal(true)}
        >
          <div className="buttonAdd" style={{ color: COLORS.Colorless, backgroundColor: COLORS.Fire }}>+</div>
        </div>

        {
          showModal && (
            <Modal
              isShow={showModal}
              onClose={() => { setShowModal(false) }}
            />
          )
        }
      </div>
    </div>
  )
}

export default observer(App)
