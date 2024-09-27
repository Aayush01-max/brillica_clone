import Maininput from "./Maininput";
import Cards from "./Cards";
import { Link } from "react-router-dom";
// import "./App.css"


function Batch() {

    

  return (
    <div className="batch">
      <div id="main">
        <Link to="/batch">
        <Maininput></Maininput>
        </Link>
      </div>
    </div>
  );
}

export default Batch;
