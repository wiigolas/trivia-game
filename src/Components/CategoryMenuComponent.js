import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default class CategoryMenuComponent extends Component<Props> {

  constructor() {
    super();
    this.state = {
      categories: [
        {
          categoryName: 'General Knowledge',
          categoryId: 9
        },
        {
          categoryName: 'Video Games',
          categoryId: 15
        },
        {
          categoryName: 'Sports',
          categoryId: 21
        },
        {
          categoryName: 'Animals',
          categoryId: 27
        },
      ],
      difficulties: [
        'easy',
        'medium',
        'hard',
      ],
    };
  }

  render() {
    return(
      <View style={styles.container}>
        {
          this.state.categories.map((category, key) => {
            return (
              <Button
                title={category.categoryName}
                key={key}
                onPress={() => this.props.selectCategory(category.categoryId) } />
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
