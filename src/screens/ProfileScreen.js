import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";

export default function Profile() {
  return (
    <View style={styles.background}>
      <Text>This is the profile screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
