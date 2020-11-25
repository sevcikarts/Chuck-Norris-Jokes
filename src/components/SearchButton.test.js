import React from "react";
import Enzyme, { mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import SearchButton from "./SearchButton.jsx";
import configureStore from "redux-mock-store";
import renderer from 'react-test-renderer';


Enzyme.configure({ adapter: new Adapter() });
const mockStore = configureStore([]);


describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
 
    component = renderer.create(
      <Provider store={store}>
        <SearchButton />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });



});