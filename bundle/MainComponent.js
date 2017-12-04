import React from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ToastAndroid,
  FlatList,
  TouchableOpacity
} from "react-native";

export default class HelloWorld extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Welcome`,
    headerRight: (
      <Text
        style={styles.button}
        onPress={() =>
          navigation.navigate("Next", {
            user: "Tom",
            data: "Good Lucky " + new Date()
          })
        }
      >
        个人中心
      </Text>
    )
  });

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      refreshing: false
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={this._itemDivide}
          refreshing={this.state.refreshing}
          onRefresh={this._onRefresh}
        />
      </View>
    );
  }

  // 用 index 作为 key
  _keyExtractor = (item, index) => index;

  // 下滑线
  _itemDivide = () => {
    return <View style={{ height: 0.3, backgroundColor: "#cccccc" }} />;
  };

  _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this._itemClick(item, index)}>
        <Text style={styles.item}>{item.value}</Text>
      </TouchableOpacity>
    );
  };

  // 开始刷新
  _onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => {
      var datas = [];
      for (var i = 100; i >= 0; i--) {
        datas.push({ value: "Index " + i });
      }
      this.setState({ data: datas });
      this.setState({ refreshing: false });
    }, 1500);
  };

  _itemClick = (item, index) => {
    alert("index:" + index + ", data:" + item.value);
  };

  componentDidMount() {
    this._onRefresh();
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
    color: "#000000",
    margin: 10
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});
