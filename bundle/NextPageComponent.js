import React from "react";
import { View, Text } from "react-native";

export default class NextPageComponent extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `User: ${navigation.state.params.user}`,
    // 设置滑动返回
    gesturesEnabled: true,
    headerRight: (<Text onPress={() => navigation.goBack()} style={style.text}>返回</Text>)
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text> 收到数据: {params.data}</Text>
      </View>
    );
  }
}

const style = {
    text: {
        margin:10
    }
}
