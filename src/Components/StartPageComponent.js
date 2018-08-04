import React, { Component } from 'react';
import { View, Button, StyleSheet, ActivityIndicator, } from 'react-native';

import CategoryMenuComponent from './CategoryMenuComponent';
import DifficultyMenyComponent from './DifficultyMenyComponent';

export default class StartPageComponent extends Component<Props> {

  constructor() {
    super();
    this.state = {
    };

    this.selectCategory = this.selectCategory.bind(this);
    this.selectDifficulty = this.selectDifficulty.bind(this);
  }

  componentDidMount = () => {
    this.setState({
      category: true,
      difficulty: false,
      selectedCategory: '',
    })
  }

  selectCategory = (category) => {
    this.setState({
      category: false,
      difficulty: true,
      selectedCategory: category,
    });
  }

  selectDifficulty = (difficulty) => {
    this.setState({
      difficulty: false,
    });

    this.props.fetchQuestions(this.state.selectedCategory, difficulty);
  }

  render() {
    if(!this.state.category && this.state.difficulty){
      return(
        <View style={styles.container}>
          <DifficultyMenyComponent selectDifficulty={this.selectDifficulty}/>
        </View>
      )
    };
    if(this.state.category && !this.state.difficulty){
      return(
        <View style={styles.container}>
          <CategoryMenuComponent selectCategory={this.selectCategory}/>
        </View>
      )
    }
    return(
      <View style={styles.container}>
        <ActivityIndicator />
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
