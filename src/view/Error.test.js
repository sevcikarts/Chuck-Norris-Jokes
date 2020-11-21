import React from "react";
import Enzyme, { shallow, configure } from "enzyme";
import toJSON from "enzyme-to-json"
import Adapter from "enzyme-adapter-react-16";
import Error from "./Error";
import ReactDOM from "react-dom";


configure({ adapter: new Adapter() });


  test("snapshot", () => {
  const wrapper = shallow(<Error />);
  expect(toJSON(wrapper)).toMatchSnapshot()


  })
  test('render the correct content', () => {
    const root = document.createElement("div")
       ReactDOM.render(<Error />, root)
});




