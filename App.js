import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert, Text} from 'react-native';

import StartPageComponent from './src/Components/StartPageComponent';
import FinishedGameComponent from './src/Components/FinishedGameComponent';
import GameComponent from './src/Components/GameComponent';

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
      correctAnswers: 0,
      incorrectAnswers: 0,
    };
    this.fetchQuestion = this.fetchQuestion.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.startPage = this.startPage.bind(this);
    this.updateAnswers = this.updateAnswers.bind(this);
  }

  fetchQuestion = () => {
    fetch(`https://opentdb.com/api.php?amount=${this.state.amount}`)
      .then((response) => response.json()
      .then((json) => {
         console.log(response);
        this.setState({
          questions: json.results,
          currentQuestion: json.results[0],
          triviaOn: true,
        })
      })
    );
  }

  updateAnswers = (answers) => {
    this.setState({
      correctAnswers: answers.correctAnswers,
      incorrectAnswers: answers.incorrectAnswers,
    })

  }
  updateQuestion = () => {
    if(this.state.question < this.state.amount - 1) {
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

  restartGame = () => {
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

  startPage = () => {
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
          <StartPageComponent fetchQuestion={this.fetchQuestion}/>
      )
    }
    if(this.state.finished){
      return (
        <FinishedGameComponent
          correctAnswers={this.state.correctAnswers}
          startPage={this.startPage}
          restartGame={this.restartGame}
        />
      )
    }
    return (
      <GameComponent
        currentQuestion={this.state.currentQuestion.question}
        incorrectAnswers={this.state.currentQuestion.incorrect_answers}
        correctAnswer={this.state.currentQuestion.correct_answer}
        nextQuestion={this.updateQuestion}
        totalAnswers={this.updateAnswers}
      />
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
