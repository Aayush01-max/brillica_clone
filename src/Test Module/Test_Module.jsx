import "./testmodule.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import AllTest from "./AllTest";
import { useState } from "react";

function Test_Module() {

  let [component, setcomponent] = useState(1);
  let [colorvar, setcolorvar] = useState(1);
  function comp_Loader(b) {
    let component = b;
    let colorvar = b;
    setcomponent(component);
    setcolorvar(colorvar);
  }

  return (
    <div className="batch">
      <div id="main">
        <div className="pt-3 pb-3 pr-14">
          <main className="space-x-3.5 ">
            <Link to="/Test_Module">
              <button
                className={colorvar === 1 ? "activemodule" : "modulebutton"}
                onClick={() => comp_Loader(1)}
              >
                All Test
              </button>
            </Link>
            <Link to="CreateTest">
              <button
                className={colorvar === 2 ? "activemodule" : "modulebutton"}
                onClick={() => comp_Loader(2)}
              >
                Create Test
              </button>
            </Link>
            <Link to="TestResult">
              <button
                className={colorvar === 3 ? "activemodule" : "modulebutton"}
                onClick={() => comp_Loader(3)}
              >
                Test results
              </button>
            </Link>
            <Outlet></Outlet>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Test_Module;
