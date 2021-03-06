import { createContext } from "react";
import { action, observable, makeObservable } from "mobx";
import axios from 'axios';

class PokemonContext {
  list = [];
  myList = [];

  constructor() {
    makeObservable(this, {
      list: observable,
      myList: observable,
      fetchData: action,
      addMyList: action,
      removeItemMyList: action,
    })
  }

  fetchData(key) {
    let url = 'http://localhost:3030/api/cards?limit=20'
    if (key) { url = `${url}&name=${key.toLowerCase()}&type=normal` }

    axios({
      method: 'get',
      url: url,
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
    var removeIndex = this.myList.map(item => {
      return item.id;
    }).indexOf(id);
    this.myList.splice(removeIndex, 1);
  }


}

const PokemonStoreContext = createContext(new PokemonContext());
export default PokemonStoreContext;
