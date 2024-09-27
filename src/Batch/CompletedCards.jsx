import "./Cards.css"

function CompletedCards({Details}) {
  return (
    <div>
      <section className="contain">
        {Details.map((Courses, i) => {
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

export default CompletedCards
