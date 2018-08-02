import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert, Text} from 'react-native';

import Question from './App/Components/Question';
import Answers from './App/Components/Answers';

export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      amount: 10,
      question: 0,
      currentQuestion: '',
      questions: '',
      triviaOn: false,
      finished: false,
    };
    this.fetchQuestion = this.fetchQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.startPage = this.startPage.bind(this);
  }

  fetchQuestion() {
    fetch(`https://opentdb.com/api.php?amount=${this.state.amount}`)
      .then((response) => response.json()
      .then((json) => {
        this.setState({
          questions: json.results,
          currentQuestion: json.results[0],
          triviaOn: true,
        })
      })
    );
  }

  updateQuestion() {
    if(this.state.question < this.state.amount - 1) {
      console.log(this.state.question);
      this.setState({
        question: this.state.question + 1,
        currentQuestion: this.state.questions[this.state.question + 1],
      });
    }else{
      this.setState({
        finished: true
      });
    }
  }
  restartGame() {
    this.setState({
      amount: 10,
      question: 0,
      currentQuestion: '',
      questions: '',
      triviaOn: true,
      finished: false,
    });
    this.fetchQuestion();
  }
  startPage() {
    this.setState({
      amount: 10,
      question: 0,
      currentQuestion: '',
      questions: '',
      triviaOn: false,
      finished: false,
    });
  }
  render() {
    if (!this.state.triviaOn) {
      return (
          <View style={styles.container}>
            <Button title='Click' onPress={this.fetchQuestion} />
          </View>
      )
    }
    if(this.state.finished){
      return (
        <View style={styles.container}>
          <Text>The game is finished</Text>
          <Button title="Restart" onPress={this.restartGame } />
          <Button title="Return to Start Page" onPress={this.startPage} />
        </View>
      )
    }
    return (
      <View style={styles.container}>


        <Question currentQuestion={this.state.currentQuestion.question} />
        <Answers
          incorrectAnswers={this.state.currentQuestion.incorrect_answers}
          correctAnswer={this.state.currentQuestion.correct_answer}
          nextQuestion={this.updateQuestion}
        />
        <Text>{this.state.question}</Text>
      </View>
    );
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