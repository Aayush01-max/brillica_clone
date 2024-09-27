import "./modulecard.css"
import Modal from "../Portal/Modal_comp";
import { useState } from "react";


function Modulecards({filter}) {

  const [modal, setmodal] = useState(false);
  function showmodal() {
    setmodal(!modal);
  }

  return (
    <div>
      <section className="contain pt-4 pl-4">
        {filter.map((Courses, j) => {
          return (
            <div className="modulecard" key={j} onClick={showmodal}>
              {modal && <Modal />}
              <h2>{Courses.type} </h2> <br />
              <div className="">
              <button>Duration <br /> <p className="font-semibold">{Courses.duration}</p></button> &nbsp;&nbsp;&nbsp;&nbsp;
              <button>Total Topic <br /> <p className="font-semibold">{Courses.topic}</p></button> &nbsp;&nbsp;&nbsp;&nbsp;
              <button>Fees <br /><p className="font-semibold">{Courses.fees}</p> </button>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Modulecards;
