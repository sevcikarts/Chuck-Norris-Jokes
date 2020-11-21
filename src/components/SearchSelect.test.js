import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import SearchSelect from "./SearchSelect.jsx";
import configureStore from "redux-mock-store";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore();
const store = mockStore();

it("rendering InputLabel", () => {
  const wrapper = shallow(<Provider store={store} SearchSelect />);
  const input = wrapper.find(InputLabel);
  expect(input.exists()).toEqual;
});
