import 'react-native';
import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep'}));

configure({ adapter: new Adapter() });

import QuestionComponent from '../Components/QuestionComponent';

describe('testing the <QuestionComponent>', () => {
  let wrapper;

  beforeEach(() => {
    this.wrapper = shallow(
      <QuestionComponent currentQuestion='Question' />
    );
  });

  it('renders correctly', () => {
    expect(this.wrapper).toMatchSnapshot();
  });
  
  it('displays a question', () => {
    expect(this.wrapper.props().children).toEqual('Question');
  })
})
