import { useSearchParams } from "react-router-dom";
import "./maininput.css";
import { useState,useEffect } from "react";
import Cards from "./Cards";
import UpcomingCards from "./UpcomingCards";
import CompletedCards from "./CompletedCards";

export default function Maininput() {
  let Detail = [
    {
      type: "Frontend/Nitin/23-sep",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2023-09-23 to 2023-12-31",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "10am/FS/4-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-04 To 2024-05-11",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "4:30pm/FS/Nitin/13-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-13 To 2024-7-13",
      Time: "4:30 PM - 6:30 PM",
    },
    {
      type: "Frontend/Nitin/23-sep",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2023-09-23 to 2023-12-31",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "10am/FS/4-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-04 To 2024-05-11",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "4:30pm/FS/Nitin/13-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-13 To 2024-7-13",
      Time: "4:30 PM - 6:30 PM",
    },
  ];

  let Details = [
    {
      type: "10am/FS/4-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-04 To 2024-05-11",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "Frontend/Nitin/23-sep",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2023-09-23 to 2023-12-31",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "10am/FS/4-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-04 To 2024-05-11",
      Time: "10:00 AM - 12:00 PM",
    },
    {
      type: "4:30pm/FS/Nitin/13-mar",
      Name: "Mern stack",
      teacher: "nitin bela",
      Date: "2024-03-13 To 2024-7-13",
      Time: "4:30 PM - 6:30 PM",
    },
  ];

  let [component, setcomponent] = useState(1);
  let [colorvar, setcolorvar] = useState(1);
  function comp_Loader(b) {
    let component = b;
    let colorvar = b;
    setcomponent(component);
    setcolorvar(colorvar);
  }

  // search input suggestion
  const [input, setinput] = useState("");
  const [filter, setfilter] = useState(Detail);

  let main_value = input.toLowerCase();
  function searcher() {
    let Card = Detail.filter((cart) => {
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
    <main className="main">
      <input className="input" value={input} 
      type="text" 
      placeholder="Search here..." 
      onChange={(e)=>setinput(e.target.value)}/>
      <br />
      <div className="flex pt-3">
        <button
          className={colorvar === 1 ? "active_btn" : "btn"}
          onClick={() => comp_Loader(1)}
        >
        Current
        </button>
        &nbsp;
        <button 
          className={colorvar === 2 ? "active_btn" : "btn"}
          onClick={() => comp_Loader(2)}
        >
          Upcoming
        </button>
        &nbsp;
        <button
          className={colorvar === 3 ? "active_btn" : "btn"}
          onClick={() => comp_Loader(3)}
        >
          Completed
        </button>
        &nbsp;
      </div>
      <div>
        {component === 1 && <Cards filter={filter}></Cards>}
        {component === 2 && <UpcomingCards></UpcomingCards>}
        {component === 3 && <CompletedCards Details={Details}></CompletedCards>}
      </div>
    </main>
  );
}
