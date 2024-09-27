import "./module.css"
import Modulecards from "./Modulecards";
import { useEffect, useState } from "react";

function Module() {
  
   let Module = [
     {
       type: "Core Python",
       duration: "45days",
       topic: "29",
       fees: "11800",
     },
     {
       type: "CCNA Networking",
       duration: "45days",
       topic: "15",
       fees: "25000",
     },
     {
       type: "Cyber Security",
       duration: "60days",
       topic: "29",
       fees: "60000",
     },
     {
       type: "Tableau",
       duration: "45days",
       topic: "29",
       fees: "14160",
     },
     {
       type: "Python for Data analysis",
       duration: "60days",
       topic: "29",
       fees: "30000",
     },
     { 
      type: "PowerBI", 
      duration: "30days",
      topic: "29", 
      fees: "14160" },
   ];


   const [input, setinput] = useState("");
   const [filter, setfilter] = useState(Module);

   let main_value = input.toLowerCase();
   function searcher() {
     let Card = Module.filter((cart) => {
       let Keys = Object.keys(cart);

       for (let i = 0; i < Keys.length; i++) {
         let keyarr = Keys[i];
         if (String(cart[keyarr]).toLowerCase().includes(input) === true) {
           return cart;
         }
       }
     });
     setfilter(Card);
   }
   useEffect(() => {
     searcher();
   }, [input]);

   
  return (
    <div className="batch ">
      <div id="main">
        <div className="pl-4 pt-4">
          <input
            className="input" value={input}
            type="text"
            placeholder="Search here..."
            onChange={(e) => setinput(e.target.value)}
          />
        </div>
        <br />

        <Modulecards filter={filter}></Modulecards>
      </div>
    </div>
  );
}

export default Module
