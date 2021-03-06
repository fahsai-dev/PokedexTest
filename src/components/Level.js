import * as React from "react";
import { COLORS, IMAGES } from '../constants';

const Level = (props) => {
  const { title, percent } = props;

  return (
    <div style={{ display: "flex", marginBottom: 4 }}>
      <div style={{ width: '20%' }}>
        {title || 'Level'}
        {percent}
      </div>
      <div style={{ width: '80%', height: 32, borderRadius: 40, backgroundColor: COLORS.Colorless, overflow: 'hidden' }}>
        <div key={percent} style={{ width: percent || 0, height: 32, backgroundColor: COLORS.Fighting, borderRadius: 40 }} />
      </div>
    </div>
  );
};

export default Level;