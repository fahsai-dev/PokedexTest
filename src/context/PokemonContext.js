import { createContext } from "react";
import { action, observable, makeObservable } from "mobx";
import axios from 'axios';

class PokemonContext {
  list = [];
  myList = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      fetchData: action,
      addMyList: action,
      removeItemMyList: action,
    })
  }

  fetchData() {
    axios({
      method: 'get',
      url: 'http://localhost:3030/api/cards?limit=100',
    }).then((response) => {
      console.log(response.data.cards);
      this.list = response.data.cards
    });
  }

  addMyList(object) {
    if (object) {
      this.myList.push(object);
    }
  }

  removeItemMyList(id) {
    this.myList = this.myList.filter(item => item.id != id);
    console.log(this.myList);
  }


}

const PokemonStoreContext = createContext(new PokemonContext());
export default PokemonStoreContext;
