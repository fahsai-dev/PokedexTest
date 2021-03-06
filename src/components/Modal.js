import * as React from "react";
import { COLORS, IMAGES } from '../constants';
import { Card } from "../components";

const Modal = (props) => {
  const { } = props;
  return (
    <div className="modal">
      <div className="modalContainer" style={{ backgroundColor: COLORS.Colorless }}>
        <div style={{ padding: 20 }}>
          <div className="inputContainer" style={{ borderColor: COLORS.Gray }}>
            <input style={{ flex: 1, border: 'none' }} />
            <img style={{ width: 44, height: 44 }} src={IMAGES.iconSearch} alt="Search" />
          </div>

          <div style={{ overflow: 'scroll', height: 600, paddingTop: 20 }}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Modal;