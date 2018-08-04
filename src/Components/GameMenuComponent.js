import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class StartPageComponent extends Component<Props> {

  constructor() {
    super();
    this.state = {
      categories: [
        '9', // 'General Knowledge'
        '15', // 'Video Games'
        '21', // 'Sport'
        '27', // 'Animals'

      ],
    }
  }
  render() {
    return(
      <View style={styles.container}>
        {
          this.state.categories.map((category, key) => {
            return (
              <Button
                title={category}
                key={key}
                onPress={() => this.props.selectCategory(category) } />
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
