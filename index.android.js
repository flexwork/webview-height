
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text
} from 'react-native';
import AutoHeightWebView from './AutoHeightWebView.js'

class AwsomeProject extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View>
      <Text>Webview autoheight demo</Text>
      <AutoHeightWebView />
      </View>
    );
  }
}



AppRegistry.registerComponent('AwsomeProject', () => AwsomeProject);
