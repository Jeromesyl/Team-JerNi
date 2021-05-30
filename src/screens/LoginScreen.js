import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function LoginScreen({ route, navigation }) {
  const { id, stack } = route.params;
  return (
    <View style={styles.background}>
      <View style={styles.login}>
        <Text>Login Screen</Text>
        <Text>id: {JSON.stringify(id)}</Text>
        <Text>stackId: {JSON.stringify(stack)}</Text>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
        <Button
          title="Go to signup"
          onPress={() => navigation.navigate("Signup")}
        />
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
  login: {
    flex: 0.5,
    backgroundColor: "white",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
