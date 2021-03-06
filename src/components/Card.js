import * as React from "react";
import { COLORS, IMAGES } from '../constants';
import { Level } from '../components';

const Card = (props) => {
  const { width } = props;

  return (
    <div className="cardContainer flexRow" style={{ width: width || '100%', backgroundColor: COLORS.Gray }}>
      <div style={{ width: '30%', padding: 10 }}>
        <img style={{ objectFit: 'contain', width: '100%' }} src={IMAGES.iconCute} />
      </div>
      <div style={{ width: '70%', padding: 20 }}>
        <div className="flexRow" style={{ justifyContent: 'space-between', marginBottom: 10 }}>
          <div className="font-22">title</div>
          <div className="font-22" style={{ color: COLORS.Fairy }}>Add</div>
        </div>

        <Level title="HP" />
        <Level title="STR" />
        <Level title="WEAK" />

        <div className="flexRow" style={{ marginTop: 10 }}>
          <img style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} />
          <img style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} />
          <img style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} />
          <img style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} />
          <img style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} />
          <img style={{ objectFit: 'contain', width: 40, height: 40, marginRight: 4 }} src={IMAGES.iconCute} />
        </div>

      </div>
    </div>
  );
};

export default Card;