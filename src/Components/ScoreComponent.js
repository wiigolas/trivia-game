import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/styles.js';

export default class ScoreComponent extends Component<Props> {
  constructor() {
    super();
    this.state = {};
  }

  scoreFeedback = (totalScore) => {
    let message;

    switch (totalScore) {
      case 0:
        message = 'You suck!';
        break;
      case 1:
      case 2:
      case 3:
        message = 'That was pretty bad!';
        break;
      case 4:
      case 5:
      case 6:
        message = 'Well done, keep on trying!';
        break;
      case 7:
      case 8:
      case 9:
        message = 'You\'re really smart!';
        break;
      case 10:
        message = 'You\'re a genius! Are you an alien? 10/10';
        break;
    }

    return message;
  }

  render() {
    const totalScore = `You had ${this.props.totalScore} correct answers`;
    return(
      <View style={styles.container}>
        <Text id='score'>{totalScore}</Text>
        <Text id='feedback'>{this.scoreFeedback(this.props.totalScore)}</Text>
      </View>
    )
  }
}
