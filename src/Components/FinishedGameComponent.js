import React, { Component }  from 'react';
import {View, Text, Button, StyleSheet } from 'react-native';

import ScoreComponent from './ScoreComponent';

export default class FinishedGameComponent extends Component<Props> {
    render() {
      return (
        <View style={styles.container}>
          <Text>The game is finished</Text>
          <ScoreComponent totalScore={this.props.correctAnswers}/>
          <Button title="Restart" onPress={this.props.restartGame } />
          <Button title="Return to Start Page" onPress={this.props.startPage} />
        </View>
      )
    };
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
