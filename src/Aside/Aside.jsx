import { useState } from "react";
import "./aside.css";
import { Link } from "react-router-dom";

export default function Aside() {

  
  let [colorvar,setcolorvar] = useState(2)

  function Component(a) {
    let colorvar = a;
    setcolorvar(colorvar);


  }
  return (
    <section className="section">
      <aside className="aside">
        <ol className="list">
          <Link to="Module">
            <li
              className={colorvar === 1 ? "active" : ""}
              onClick={() => Component(1)}
            >
              Module
            </li>
          </Link>

          <Link to="/">
            <li
              className={colorvar === 2 ? "active" : ""}
              onClick={() => Component(2)}
            >
              Batch
            </li>
          </Link>

          <Link to="Test_Module">
            <li
              className={colorvar === 3 ? "active" : ""}
              onClick={() => Component(3)}
            >
              Test Module
            </li>
          </Link>

          <Link to="Resources">
            <li
              className={colorvar === 4 ? "active" : ""}
              onClick={() => Component(4)}
            >
              Resources
            </li>
          </Link>
        </ol>
      </aside>
    </section>
  );
}
