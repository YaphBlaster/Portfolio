import React from "react";
import { configure, shallow, mount } from "enzyme";
import sinon from "sinon";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

import Navbar from "./Navbar";

configure({ adapter: new Adapter() });
describe("<Navbar/>", () => {
  const minProps = {
    name: ""
  };
  it("has 3 links", () => {
    const wrapper = shallow(<Navbar />);
    expect(
      wrapper.find(".navbar").getElement().props.children
    ).to.have.lengthOf(3);
  });
});
