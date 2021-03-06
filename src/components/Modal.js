import * as React from "react";
import { COLORS, IMAGES } from '../constants';
import { Card } from "../components";
import useOutsideClick from "../utils/useOutsideClick";

const Modal = (props) => {
  const { isShow, onClose } = props;

  const ref = React.useRef();

  useOutsideClick(ref, () => {
    if (isShow === true) {
      onClose()
    }
  });

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
  } else {
    return null
  }
};

export default Modal;