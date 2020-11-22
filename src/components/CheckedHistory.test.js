import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16"
import toJSON from "enzyme-to-json"
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import CheckedHistory from "./CheckedHistory.jsx";

Enzyme.configure({ adapter: new Adapter() });

it("rendering TextField", () => {
    const wrapper = shallow(<CheckedHistory  />);
    const input = wrapper.find(<FormControlLabel list ={
        listOfJokes.length-1
    }></FormControlLabel>);
    expect(input.length).toBe(1);
  });

  it("snapShot", () => {
    const wrapper = shallow(
      <FormControlLabel />
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });