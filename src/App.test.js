import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

import App from "./App";
import Name from "./components/Name";
import Summary from "./components/Summary";
import About from "./components/About";
import ProjectContainer from "./components/ProjectContainer";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

configure({ adapter: new Adapter() });
describe("Renders App Components", () => {
  const minProps = {
    name: "",
    summary: "",
    about: [],
    prefix: "",
    projects: [],
    links: []
  };
  it("renders App component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.length).to.equal(1);
  });
  it("renders Navbar component", () => {
    const wrapper = shallow(<App />);
    const component = <Navbar />;
    expect(wrapper.contains(component)).to.equal(true);
  });
  it("renders Name component", () => {
    const wrapper = shallow(<Name {...minProps} />);
    expect(wrapper.length).to.equal(1);
  });
  it("renders Summary component", () => {
    const wrapper = shallow(<Summary {...minProps} />);
    expect(wrapper.length).to.equal(1);
  });
  it("renders About component", () => {
    const wrapper = shallow(<About {...minProps} />);
    expect(wrapper.length).to.equal(1);
  });
  it("renders ProjectContainer component", () => {
    const wrapper = shallow(<ProjectContainer {...minProps} />);
    expect(wrapper.length).to.equal(1);
  });
  it("renders Contact component", () => {
    const wrapper = shallow(<Contact {...minProps} />);
    expect(wrapper.length).to.equal(1);
  });
});
