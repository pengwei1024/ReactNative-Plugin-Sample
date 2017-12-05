import React from "react";
import { View, WebView, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("window");

const url = "http://www.apkfuns.com";

export default class WebViewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      webViewState: undefined
    };
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.title}`,
    headerRight: (
      <Text onPress={() => navigation.goBack()} style={style.text}>
        刷新
      </Text>
    )
  });

  render() {
    const { params } = this.props.navigation.state;
    return (
      <WebView
        style={{ width: width, height: height, backgroundColor: "#ffffff" }}
        source={{ uri: url }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        scalesPageToFit={false}
        onLoadEnd={this._onloadEnd}
        onNavigationStateChange={this._onNavigationStateChange}
      />
    );
  }

  ChangeThisTitle = titleText => {
    const { setParams } = this.props.navigation;
    setParams({ title: titleText });
  };

  _onNavigationStateChange = webViewState => {
    this.setState({ webViewState: webViewState });
  };

  _onloadEnd = () => {
    let title = this.state.webViewState.title;
    this.ChangeThisTitle(title);
    // alert('loadEnd:' + title)
  };
}

const style = {
  text: {
    margin: 10
  }
};
