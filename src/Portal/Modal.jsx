import React from 'react'
import style from "./modal.module.css";

function Modal({ children, show }) {
  return (
    <div className={style.modal} >
      <span className="p-4 font-semibold" onClick={show}>
        X
      </span>
      {children}
    </div>
  );
}

export default Modal;
