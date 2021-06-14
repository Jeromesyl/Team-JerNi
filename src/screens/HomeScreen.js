import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Button } from "react-native";
import { data } from "../data/dummyData";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.background}>
      <Button
        title="Famous Chicken Rice"
        onPress={() =>
          navigation.navigate("Restaurant", {
            name: data[0].name,
            description: data[0].description,
            rating: data[0].rating,
            image: data[0].image,
            location: data[0].location,
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
            location: data[1].location,
            menu: data[1].menu,
          })
        }
      />
      <Button
        title="Famous Western"
        onPress={() =>
          navigation.navigate("Restaurant", {
            name: data[2].name,
            description: data[2].description,
            rating: data[2].rating,
            image: data[2].image,
            location: data[2].location,
            menu: data[2].menu,
          })
        }
      />
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
