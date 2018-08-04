import 'react-native';
import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep'}));

configure({ adapter: new Adapter() });

import StartPageComponent from '../Components/StartPageComponent';

describe('testing the <StartPageComponent>', () => {
  let wrapper;

  beforeEach(() => {
    this.wrapper = shallow(
      <StartPageComponent fetchQuestion={() => {}}/>
    );
  })

  it('renders correctly', () => {
    expect(this.wrapper).toMatchSnapshot();
  });

  it('displays start button', () => {
    expect(this.wrapper.find('Button'));
  })
})
