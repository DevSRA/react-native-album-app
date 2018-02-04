/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Header from './src/components/header.js'
import AlbumList from  './src/components/AlbumList.js'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{flex :1}}>
      <Header headerText = "Albums"/>
      <AlbumList/>
      </View>
    );
  }
}

