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
        <CategoryMenuComponent selectCategory={this.selectCategory}/>
      )
    }
    return(
      <ActivityIndicator style={styles.loading}/>
    )
  }
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
