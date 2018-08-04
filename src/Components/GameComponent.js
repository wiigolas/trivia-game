import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import QuestionComponent from './QuestionComponent';
import AnswersComponent from './AnswersComponent';

export default class GameComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <QuestionComponent currentQuestion={this.props.currentQuestion} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
