

function CreateTest() {
  return (
    <div className="pt-5">
      <div className="space-y-3">
        <b>Test Name</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Test Name" className="w-56 pl-2" />{" "}
        <br />
        <b>Test Duration</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="Test Duration" className="w-56 pl-2" />
        <br />
        <b>Select Course</b>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <select name="" id="" className="w-56 pl-2">
          <option value="">Select Course</option>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
}

export default CreateTest;
