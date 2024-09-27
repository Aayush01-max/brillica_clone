import "./testmodule.css"

function AllTest() {
  return (
    <div className=" pt-5">
      <div className="space-y-3">
        <section className="space-x-8 flex flex-wrap gap-8 min-[500px]:space-x-0 ">
          <div className="boxone">
            <h2 className="text-center">
              <b> Frontend Developer</b>
            </h2>
            <br />
            <p className="pl-3.5">HTML CSS</p>
            <hr />
            <p className="pl-3.5">Javascript , ReactJS</p>
            <hr />
          </div>
          <div className="boxtwo">
            <h2 className="text-center">
              <b>Mern Stack</b>
            </h2>
            <br />
            <p className="pl-3.5">Javascript</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AllTest

