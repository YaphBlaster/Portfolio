import React, { Component } from "react";
import "./App.css";
import Data from "./data/UserInfo";
import Anime from "react-anime";
import Name from "./components/Name";
import Summary from "./components/Summary";
import About from "./components/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Anime
          opacity={[0, 1]}
          translateY={"1em"}
          delay={(e, i) => i * 200}
          scale={[0.75, 1]}
          easing="easeOutElastic"
        >
          <div>
            <Name name={`${Data.firstName} ${Data.lastName}`} />
          </div>
          <div>
            <Summary summary={Data.summary} />
          </div>
          <div>
            <About prefix={Data.firstName} about={Data.about} />
          </div>
        </Anime>
      </div>
    );
  }
}

export default App;
