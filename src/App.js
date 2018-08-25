import React, { Component } from "react";
import "./css/style.css";
import Data from "./data/UserInfo";
import Anime from "react-anime";
import Navbar from "./components/Navbar";
import Name from "./components/Name";
import Summary from "./components/Summary";
import About from "./components/About";
import ProjectContainer from "./components/ProjectContainer";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Anime opacity={[0, 1]} translateY={"1em"}>
          <div>
            <Navbar />
          </div>
        </Anime>
        <div className="App">
          <Anime opacity={[0, 1]} translateY={"1em"} delay={(e, i) => i * 200}>
            <div>
              <Name name={`${Data.firstName} ${Data.lastName}`} />
            </div>
            <div>
              <Summary summary={Data.summary} />
            </div>
            <div>
              <About prefix={Data.firstName} about={Data.about} />
            </div>
            <div>
              <ProjectContainer projects={Data.projects} />
            </div>
            <div>
              <Contact links={Data.links} />
            </div>
          </Anime>
        </div>
      </div>
    );
  }
}

export default App;
