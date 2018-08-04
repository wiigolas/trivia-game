import React, {Component} from 'react';
import {StyleSheet, View, Button, Alert, Text } from 'react-native';

import StartPageComponent from './src/Components/StartPageComponent';
import FinishedGameComponent from './src/Components/FinishedGameComponent';
import GameComponent from './src/Components/GameComponent';
import styles from './src/Styles/styles';

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
      currentCategory: '',
      currentDifficulty: '',
    };
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.startPage = this.startPage.bind(this);
    this.updateAnswers = this.updateAnswers.bind(this);
  }

  fetchQuestions = (category, difficulty) => {
    console.log(category, difficulty)
    fetch(`https://opentdb.com/api.php?amount=${this.state.amount}&category=${category.categoryId}&difficulty=${difficulty}`)
      .then((response) => response.json()
      .then((json) => {
        this.setState({
          questions: json.results,
          currentQuestion: json.results[0],
          triviaOn: true,
          currentCategory: category,
          currentDifficulty: difficulty,
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
    this.fetchQuestions(this.state.currentCategory, this.state.currentDifficulty);
  }

  startPage = () => {
    this.setState({
      amount: 10,
      question: 0,
      currentQuestion: '',
      questions: '',
      triviaOn: false,
      finished: false,
      currentCategory: '',
      currentDifficulty: '',
    });
  }

  render() {
    if (!this.state.triviaOn) {
      return (
        <View style={styles.container}>
          <StartPageComponent fetchQuestions={this.fetchQuestions}/>
        </View>
      )
    }
    if(this.state.finished){
      return (
        <View style={styles.container}>
          <FinishedGameComponent
            correctAnswers={this.state.correctAnswers}
            startPage={this.startPage}
            restartGame={this.restartGame}
          />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <GameComponent
          currentQuestion={this.state.currentQuestion.question}
          currentCategory={this.state.currentCategory.categoryName}
          incorrectAnswers={this.state.currentQuestion.incorrect_answers}
          correctAnswer={this.state.currentQuestion.correct_answer}
          nextQuestion={this.updateQuestion}
          totalAnswers={this.updateAnswers}
        />
      </View>
    );
  }
};
