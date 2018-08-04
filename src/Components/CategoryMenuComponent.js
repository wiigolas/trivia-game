import React, { Component } from 'react';
import { View, Button, StyleSheet, Text, TouchableHighlight, Dimensions } from 'react-native';
import styles from '../Styles/styles';

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
          categoryName: 'Computers',
          categoryId: 18
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
        <Text style={styles.titleText}> Categories </Text>
        {
          this.state.categories.map((category, key) => {
            return (
              <TouchableHighlight
                key={key}
                onPress={() => this.props.selectCategory(category) }
                style={styles.menuSelectButton}
              >
                <Text style={styles.textStyle}>{category.categoryName}</Text>
              </TouchableHighlight>
            );
          })
        }
      </View>
    )
  }
};
