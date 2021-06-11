import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { data } from "../data/dummyData";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <View style={styles.homeButton}>
        <Button
          title="Famous Chicken Rice"
          onPress={() =>
            navigation.navigate("Restaurant", {
              name: data[0].name,
              description: data[0].description,
              rating: data[0].rating,
              image: data[0].image,
              menu: data[0].menu,
            })
          }
        />
        <Button
          title="Famous Fried Carrot Cake"
          onPress={() =>
            navigation.navigate("Restaurant", {
              name: data[1].name,
              description: data[1].description,
              rating: data[1].rating,
              image: data[1].image,
              menu: data[1].menu,
            })
          }
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
  homeButton: {
    backgroundColor: "white",
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
