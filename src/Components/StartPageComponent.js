import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class StartPageComponent extends Component<Props> {
  render() {
    return(
      <View style={styles.container}>
        <Button title='Start Game' onPress={this.props.fetchQuestion} />
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
