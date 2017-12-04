import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid
} from "react-native";

export default class HelloWorld extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome`,
    headerRight: (
      <Text
        style={styles.button}
        onPress={() => {
           ToastAndroid.show('Click Button', ToastAndroid.SHORT)
        }}
      >
        设置
      </Text>
    )
  });

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text
          style={styles.hello}
          onPress={() => navigate("Next", { user: "Tom", data: "Good Lucky " + new Date() })}
        >
          Hello, React Native
        </Text>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  hello: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  button: {
    color: "#ffaaff",
    margin: 10
  }
});
