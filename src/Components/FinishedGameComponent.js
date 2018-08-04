import React, { Component }  from 'react';
import {View, Text, Button, StyleSheet, TouchableHighlight } from 'react-native';

import ScoreComponent from './ScoreComponent';
import styles from '../Styles/styles.js';

export default class FinishedGameComponent extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.titleText}>The game is finished</Text>
          <ScoreComponent totalScore={this.props.correctAnswers}/>
          <TouchableHighlight
            onPress={this.props.restartGame}
            style={styles.menuSelectButton}
          >
            <Text style={styles.textStyle}>Restart</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.props.startPage}
            style={styles.menuSelectButton}
          >
            <Text style={styles.textStyle}>Return to Start Page</Text>
          </TouchableHighlight>
        </View>
      )
    };
}
