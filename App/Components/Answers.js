import React, {Component} from 'react';
import { Alert, Button, View, Text } from 'react-native';

export default class Answers extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      correctAnswers: 0,
      incorrectAnswers: 0,
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
    console.log(this.props.correctAnswer);
    console.log(selectedAnswer);
    if(selectedAnswer == this.props.correctAnswer) {
      return this.props.nextQuestion;
    } else {

    }
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  render(){
    return (
        <View>
          {
            this.answers().map((answer, key) => {
              return (
                <Button
                  title={answer}
                  key={key}
                  onPress={() => this.checkAnswer(answer), this.props.nextQuestion } />
              );
            })
          }
          <Text>Correct answers: {this.state.correctAnswers}</Text>
          <Text>Incorrect answers: {this.state.incorrectAnswers}</Text>
        </View>
    )
  }
}
