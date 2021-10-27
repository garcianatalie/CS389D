import React, { Component } from "react";
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  StyleSheet
} from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.yellowBlock}>
          <Image
            source={{
              uri: "https://codehs.com/uploads/c799accde67e1fd3bbd699119b4e1c83"
            }}
            style={{ height: 50, width: 50 }}
          />
        </View>
        <TouchableHighlight
          style={styles.redBlock}
          onPress={() => {
            alert("You have successfully logged in.");
          }}
        >
          <Text style={styles.text}>LOG IN</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.blueBlock}
          onPress={() => {
            alert("You have successfully signed up.");
          }}
        >
          <Text style={styles.text}>SIGN UP</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  yellowBlock: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffc00"
  },
  redBlock: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff0049"
  },
  blueBlock: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00a9ff"
  },
  text: {
    fontFamily: "Avenir",
    fontSize: 16,
    color: "white",
    fontWeight: "bold"
  }
});
