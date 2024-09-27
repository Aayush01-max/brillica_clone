import React from "react";
import { createPortal } from "react-dom";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Portal({ show, children }) {
  return (
    <div>
      {createPortal(
        <Backdrop show={show} />,
        document.querySelector(".backdrop")
      )}
      {createPortal(
        <Modal children={children} show={show} />,
        document.querySelector(".modalbox")
      )}
    </div>
  );
}

export default Portal;
