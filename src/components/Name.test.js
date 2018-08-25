import React from "react";
import { configure, shallow } from "enzyme";
import { expect } from "chai";
import Adapter from "enzyme-adapter-react-16";

import Name from "./Name";

configure({ adapter: new Adapter() });
describe("Renders Without Crashing", () => {
  const minProps = {
    name: ""
  };
  it("Renders Name component", () => {
    const wrapper = shallow(<Name {...minProps} />);
    expect(wrapper.length).to.equal(1);
  });
});
