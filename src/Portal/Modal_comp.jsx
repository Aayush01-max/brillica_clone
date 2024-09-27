import Portal from "./Portal";
import style from "./comp1.module.css";


function Modal_comp() {
  return (
    <Portal>
      <h1 className="px-5 py-5 border-b-4 font-bold text-xl">BSPLModule_2</h1>
      <div className={style.box}>
        <h2>Module Name</h2>
        <button>Core Python</button>
        <h2>Days</h2>
        <button>45</button>
        <h2>Fee</h2>
        <button>11800</button>
        <h2>Topic</h2>
        <button>Introduction</button>
      </div>
    </Portal>
  );
}

export default Modal_comp;
