import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.background}>
      <View style={styles.homeButton}>
        <Text>This is the home screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FF5858",
  },
  homeButton: {
    backgroundColor: "white",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
