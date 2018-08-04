import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import GameMenuComponent from './GameMenuComponent';

export default class StartPageComponent extends Component<Props> {
  constructor() {
    super();
    this.state = {

    };
    this.selectCategory = this.selectCategory.bind(this);
  }
  selectCategory = (category) => {
    this.props.fetchQuestions(category)
  }
  render() {
    return(
      <View style={styles.container}>
        <GameMenuComponent selectCategory={this.selectCategory}/>
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
