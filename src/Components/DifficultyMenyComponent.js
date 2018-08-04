import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class DifficultyMenyComponent extends Component<Props> {

  constructor() {
    super();
    this.state = {
      difficulties: [
        {
          difficultyCategory: 'easy',
          difficultyName: 'Easy',
        },
        {
          difficultyCategory: 'medium',
          difficultyName: 'Medium',
        },
        {
          difficultyCategory: 'hard',
          difficultyName: 'Hard',
        },
      ],
    };
  }

  render() {
    return(
      <View style={styles.container}>
        {
          this.state.difficulties.map((difficulty, key) => {
            return (
              <Button
                title={difficulty.difficultyName}
                key={key}
                onPress={() => this.props.selectDifficulty(difficulty.difficultyCategory) } />
            );
          })
        }
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
