import "./App.css";
import { Route,Routes } from "react-router-dom";
import Header from "./Header/Header";
import Aside from "./Aside/Aside";
import Batch from "./Batch/Batch";
import Module from "./Module/Module";
import Test_Module from "./Test Module/Test_Module";
import Resources from "./Resourses/Resources";
import AllTest from "./Test Module/AllTest";
import CreateTest from "./Test Module/CreateTest";
import TestResult from "./Test Module/TestResult";
import Maininput from "./Batch/Maininput";


function Section() {
  return (
    <div>
      <div className="header_section">
        <Header></Header>
      </div>
      <div className="background">
        <section className="main_section">
          <Aside></Aside>
          <Routes>
            <Route path="module" element={<Module />}></Route>
            <Route path="/" element={<Batch />}>
              <Route path="/batch" element={<Maininput></Maininput>}></Route>
            </Route>
            <Route path="Test_Module" element={<Test_Module />}>
              <Route path="/Test_Module" element={<AllTest></AllTest>}></Route>
              <Route
                path="CreateTest"
                element={<CreateTest></CreateTest>}
              ></Route>
              <Route path="TestResult" element={<TestResult />}></Route>
            </Route>
            <Route path="Resources" element={<Resources></Resources>}></Route>
          </Routes>
        </section>
      </div>
    </div>
  );
}

export default Section;
