'use strict';

import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: '#95ff4f',
    padding: 40,
  },
  answersContainer: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#95ff4f',
    padding: width * 0.03,
  },
  menuSelectButton: {
    width: width * 0.9,
    height: 60,
    margin: 10,
    backgroundColor: '#f8f9f7',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  answerSelectButton: {
    width: width * 0.45,
    marginLeft: width * 0.01,
    marginRight: width * 0.01,
    height: 60,
    backgroundColor: '#f8f9f7',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10
  },
  titleText: {
    width: width,
    height:75,
    backgroundColor: '#79db39',
    textAlign: 'center',
    lineHeight: 75,
    fontSize: 30,
  },
  textStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    lineHeight: 60,
  },
  questionContainer: {
    height: height * 0.4,
    backgroundColor: '#95ff4f',
    alignItems: 'center',
  },
  questionTextContainer : {
    width: width * 0.9,
    height: height * 0.25,
    backgroundColor: '#f8f9f7',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    padding: 10,
    fontSize: 15,
  }
});
