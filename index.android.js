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

import NextPageComponent from './bundle/NextPageComponent';
import MainComponent from './bundle/MainComponent';

const App = StackNavigator({
    Home: {screen: MainComponent},
    Next: {screen: NextPageComponent},
 });

AppRegistry.registerComponent('MyReactNativeApp', () => App);