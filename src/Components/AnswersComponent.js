import React, {Component} from 'react';
import { Alert, Button, View, Text, TouchableHighlight } from 'react-native';

import styles from '../Styles/styles';

export default class AnswersComponent extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      answers: {
        correctAnswers: 0,
        incorrectAnswers: 0,
      }
    };

    this.checkAnswer = this.checkAnswer.bind(this);
  }

  answers = () => {
    if(this.props.incorrectAnswers){
      const array =  this.props.incorrectAnswers.concat([this.props.correctAnswer]);
      const shuffledArray = this.shuffle(array);
      return shuffledArray;
    }else{
      return [];
    }
  }

  checkAnswer(selectedAnswer) {
    if(selectedAnswer == this.props.correctAnswer) {
      this.setState({
        answers: {
          correctAnswers: this.state.answers.correctAnswers + 1,
          incorrectAnswers: this.state.answers.incorrectAnswers,
        }
      });
    } else {
      this.setState({
        answers: {
          correctAnswers: this.state.answers.correctAnswers,
          incorrectAnswers: this.state.answers.incorrectAnswers + 1,
        }
      });
    };
    this.props.totalAnswers(this.state.answers);
    this.props.nextQuestion();

  };

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  render(){
    return (
      <View style={styles.answersContainer}>
        {
          this.answers().map((answer, key) => {
            return (
              <TouchableHighlight
                key={key}
                style={styles.answerSelectButton}
                onPress={() => this.checkAnswer(answer) }
              >
                <Text style={styles.textStyle}>{answer}</Text>
              </TouchableHighlight>
            );
          })
        }
      </View>
    )
  }
}
