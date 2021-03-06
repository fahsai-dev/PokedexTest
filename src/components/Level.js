import * as React from "react";
import { COLORS, IMAGES } from '../constants';

const Level = (props) => {
  const { title } = props;

  return (
    <div style={{ display: "flex", marginBottom: 4 }}>
      <div style={{ width: '20%' }}>
        {title || 'Level'}
      </div>
      <div style={{ width: '80%', height: 32, borderRadius: 40, backgroundColor: COLORS.Colorless, overflow: 'hidden' }}>
        <div style={{ width: '50%', height: 32, backgroundColor: COLORS.Fighting }} />
      </div>
    </div>
  );
};

export default Level;