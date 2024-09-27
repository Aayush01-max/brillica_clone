import "./cards.css";
import Maininput from "./Maininput";

export default function Cards({ filter }) {
  return (
    <div>
      <section className="contain">
        {filter.map((Courses, i) => {
          return (
            <div className="card" key={i}>
              {Courses.type} <br />
              {Courses.Name} <br />
              {Courses.teacher} <br />
              {Courses.Date} <br />
              {Courses.Time} <br />
              <button type="" role="button">
                View Details
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}
