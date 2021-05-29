import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { CommonActions } from "@react-navigation/native";

import * as Authentication from "../../api/auth";

export default function ProfileScreen({ route, navigation }) {
  const handleLogout = () => {
    Authentication.signOut(
      () =>
        navigation.dispatch(
          CommonActions.reset({
            index: 0,
            routes: [{ name: "Login" }],
          })
        ),
      console.error
    );
  };
  return (
    <View style={styles.background}>
      <View style={styles.profile}>
        <Text>Profile Screen</Text>
        <Button title="Sign out" onPress={handleLogout} />
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
  profile: {
    flex: 0.5,
    backgroundColor: "white",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
