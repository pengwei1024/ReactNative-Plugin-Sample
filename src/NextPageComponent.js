import React from "react";
import { View, Text, Image } from "react-native";

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
        <Image source={{uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512383770140&di=e8c9fad8de9a76ff12b2e0313137f544&imgtype=0&src=http%3A%2F%2Fpic2015.5442.com%2F2016%2F0512%2F19%2F21.jpg%2521960.jpg'}}
       style={{width: 380, height: 200}} />
        <Image source={require('./images/ic_emotion.jpg')} style={{width: 100, height: 100}}/>
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
