import ProOne from "./download.jpeg";
import "./header.css";
import { useState } from "react";
import Profile from "../Portal/Profile";


function Header() {

  const [profile, showProfile] = useState(false);
  function show() {
    showProfile((show) => !profile);
  }

  return (
    <div>
      <header className="header">
        <div className="left">
          <img src={ProOne} alt="" width="80px" />
        </div>
        <div className="right max-[661px]:pl-64 max-[518px]:pl-56 max-[484px]:pl-48 max-[450px]:pl-40">
          <i className="fa-solid fa-bell"></i>&nbsp;&nbsp;
          <div className="pr-px">A</div>&nbsp;&nbsp;
          <span onClick={show}>
            Hi, Aayush <i className="fa-solid fa-angle-down"></i>
          </span>
          {profile && <Profile show={show} />}
        </div>
      </header>
    </div>
  );
}
export default Header;
