import React, {Component} from 'react';
import { Text, View } from 'react-native';
var entities = require("entities");

import styles from '../Styles/styles.js';

export default class QuestionComponent extends Component<Props> {
  constructor() {
    super();
    this.state = {}
  }

  render(){
    let question = entities.decodeHTML(this.props.currentQuestion);
    return (
        <View style={styles.questionContainer}>
          <Text style={styles.titleText}>
            {this.props.currentCategory}
          </Text>
          <Text style={styles.questionTextContainer}>
            {question}
          </Text>
        </View>
    )
  }
}
