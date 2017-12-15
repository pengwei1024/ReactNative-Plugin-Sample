import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ToastAndroid
} from 'react-native';

import {
    StackNavigator,
} from 'react-navigation';

import NextPageComponent from './src/NextPageComponent';
import MainComponent from './src/MainComponent';
import WebViewComponent from './src/WebViewComponent'

const App = StackNavigator({
    Home: {screen: MainComponent},
    Next: {screen: NextPageComponent},
    WebView: {screen: WebViewComponent}
 });

AppRegistry.registerComponent('MyReactNativeApp', () => App);