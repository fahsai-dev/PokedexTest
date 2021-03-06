import * as React from "react";
import { observer } from "mobx-react-lite";
import { COLORS, IMAGES } from '../constants';
import { Level } from '../components';
import { PokemonContext } from '../context';

const Card = (props) => {
  const { width, id, imageUrl, name, hp, attacks, weakness, onClickAdd, onClickRemove } = props;
  const pokemonStore = React.useContext(PokemonContext);

  const HPLevelcalculation = () => {
    if (!parseInt(hp, 10)) return `0%`
    else if (hp > 100) return `100%`
    else return `${hp}%`
  }

  const StrengthLevelcalculation = () => {
    if (attacks === 1) return `50%`
    else if (attacks === 2) return `100%`
    else return `0%`
  }

  const WeaknessLevelcalculation = () => {
    if (weakness === 1) return `100%`
    else return `0%`
  }

  const HappinessLevelcalculation = () => {
    const value = ((hp / 10) + (50 / 10) + 10 - weakness) / 5
    return value
  }

  const hidden = pokemonStore.myList.some(item => item.id === id);
  return (
    <div className="cardContainer flexRow" style={{ width: width || '100%', backgroundColor: COLORS.Gray, display: hidden ? 'none' : 'black' }}>
      <div style={{ width: '30%', padding: 10 }}>
        <img style={{ objectFit: 'contain', width: '100%', height: 200 }} src={imageUrl || IMAGES.iconCute} />
      </div>
      <div style={{ width: '70%', padding: 20 }}>
        <div className="flexRow" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="font-22">{name || 'title'}</div>
          {
            onClickAdd &&
            <div className="font-22 pointer" style={{ color: COLORS.Fairy }} onClick={onClickAdd}>Add</div>
          }
          {
            onClickRemove && <div className="font-22 pointer" style={{ color: COLORS.Fairy }} onClick={onClickRemove}>X</div>
          }
        </div>

        <Level title={'HP'} percent={HPLevelcalculation()} />
        <Level title={'STR'} percent={StrengthLevelcalculation()} />
        <Level title={'WEAK'} percent={WeaknessLevelcalculation()} />

        <div className="flexRow" style={{ marginTop: 10 }}>
          {
            Array.from({ length: HappinessLevelcalculation() }, (x, i) => {
              return (
                <img key={i} style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} alt="icon" />
              )
            })
          }

        </div>
      </div>
    </div>
  );
};

export default observer(Card);