import React, {Component} from 'react';
import { Text } from 'react-native';

export default class Question extends Component<Props> {
  constructor() {
    super();
    this.state = {}
  }
  render(){
    return <Text>{this.props.currentQuestion}</Text>
  }
}
