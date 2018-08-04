import React, {Component} from 'react';
import { Text, View } from 'react-native';

import styles from '../Styles/styles.js';

export default class QuestionComponent extends Component<Props> {
  constructor() {
    super();
    this.state = {}
  }
  render(){
    return (
        <View style={styles.questionContainer}>
          <Text style={styles.titleText}>
            {this.props.currentCategory}
          </Text>
          <Text style={styles.questionTextContainer}>
            {this.props.currentQuestion}
          </Text>
        </View>
    )
  }
}
