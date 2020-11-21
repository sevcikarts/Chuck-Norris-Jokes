import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SearchBar from "./SearchBar.jsx";
import toJSON from "enzyme-to-json"
import TextField from "@material-ui/core/TextField";

Enzyme.configure({ adapter: new Adapter() });



describe("rendering", () => {
  it("rendering div", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find("div").text()).toContain("");
  });

  it("rendering without crashing", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.find("div").text()).toHaveValue;
  });

  it("rendering TextField", () => {
    const wrapper = shallow(<SearchBar />);
    const input = wrapper.find(TextField);
    expect(input.exists()).toBe(true);
  });
  it("snapShot", () => {
    const wrapper = shallow(
      <SearchBar/>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it("rendering TextField", () => {
    const wrapper = shallow(<SearchBar  />);
    const input = wrapper.find(TextField);
    expect(input.length).toBe(1);
  });
  

});

