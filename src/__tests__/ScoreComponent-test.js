import 'react-native';
import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep'}));

configure({ adapter: new Adapter() });

import ScoreComponent from '../Components/ScoreComponent';

describe('testing the <ScoreComponent>', () => {
  let wrapper;

  beforeEach(() => {
    this.wrapper = shallow(
      <ScoreComponent totalScore={5}/>
    );
  })
  
  it('renders correctly', () => {
    expect(this.wrapper).toMatchSnapshot();
  });

  it('displays score feedback', () => {
    expect(this.wrapper.find('Text').first().props().children).toEqual('You had 5 correct answers');
    expect(this.wrapper.find('Text').last().props().children).toEqual('Well done, keep on trying!');
  })
})
