import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import QuestionComponent from './QuestionComponent';
import AnswersComponent from './AnswersComponent';
import styles from '../Styles/styles.js';

export default class GameComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <QuestionComponent
          currentQuestion={this.props.currentQuestion}
          currentCategory={this.props.currentCategory}
        />
        <AnswersComponent
          incorrectAnswers={this.props.incorrectAnswers}
          correctAnswer={this.props.correctAnswer}
          nextQuestion={this.props.nextQuestion}
          totalAnswers={this.props.totalAnswers}
        />
      </View>
    )
  }
}
