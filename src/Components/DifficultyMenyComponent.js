import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import styles from '../Styles/styles';

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
      <Text style={styles.titleText}> Difficulty </Text>
        {
          this.state.difficulties.map((difficulty, key) => {
            return (
              <TouchableHighlight
                key={key}
                style={styles.menuSelectButton}
                onPress={() => this.props.selectDifficulty(difficulty.difficultyCategory) }>
                <Text style={styles.textStyle}>{difficulty.difficultyName}</Text>
              </TouchableHighlight>
            );
          })
        }
      </View>
    )
  }
}
