import 'react-native';
import React from 'react';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createSerializer } from 'enzyme-to-json';
import sinon from 'sinon';

expect.addSnapshotSerializer(createSerializer({ mode: 'deep'}));

configure({ adapter: new Adapter() });

import AnswersComponent from '../Components/AnswersComponent';

describe('testing the <AnswersComponentComponent>', () => {
  const incorrectAnswers = [
    'answer',
    'answer',
    'answer',
  ];
  const correctAnswer = 'answer';
  it('renders correctly', () => {
    const wrapper = shallow(
      <AnswersComponent
      incorrectAnswers={incorrectAnswers}
      correctAnswer={correctAnswer}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
})
