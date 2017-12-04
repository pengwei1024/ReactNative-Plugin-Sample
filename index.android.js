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

const App = StackNavigator({
  Profile: {screen: NextPageComponent},
});

class HelloWorld extends React.Component {

  _onPressText() {
    const { navigate } = this.props.navigation;
    console.log("You tapped the button!");
    ToastAndroid.show('clicked!',ToastAndroid.SHORT);
    navigate('Profile', { name: 'Jane' });
  }

  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.hello} onPress={this._onPressText}>Hello, React Native</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);