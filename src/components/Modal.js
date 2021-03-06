import * as React from "react";
import { observer } from "mobx-react-lite";
import { COLORS, IMAGES } from '../constants';
import { Card } from "../components";
import useOutsideClick from "../utils/useOutsideClick";
import { PokemonContext } from '../context';

const Modal = (props) => {
  const { isShow, onClose } = props;

  const ref = React.useRef();
  const pokemonStore = React.useContext(PokemonContext);

  useOutsideClick(ref, () => {
    if (isShow === true) {
      onClose()
    }
  });

  React.useEffect(() => {

    pokemonStore.fetchData()
    console.log(pokemonStore);
  }, []);

  if (isShow) {
    return (
      <div className="modal">
        <div ref={ref} className="modalContainer" style={{ backgroundColor: COLORS.Colorless }}>
          <div style={{ padding: 20 }}>
            <div className="inputContainer" style={{ borderColor: COLORS.Gray }}>
              <input placeholder="Find pokemon" />
              <img style={{ width: 44, height: 44 }} src={IMAGES.iconSearch} alt="Search" />
            </div>

            <div style={{ overflow: 'scroll', height: 600, paddingTop: 20 }}>
              {
                pokemonStore.list.map((item) => (
                  <Card
                    key={item.id}
                    imageUrl={item.imageUrl}
                    name={item.name}
                    hp={item.hp}
                    attacks={item.attacks ? item.attacks.length : 0}
                    weakness={item.weaknesses ? item.weaknesses.length : 0}
                    onClickAdd={() => pokemonStore.addMyList(item)}
                  />
                ))
              }
            </div>

          </div>
        </div>
      </div>
    );
  } else {
    return null
  }
};

export default observer(Modal);