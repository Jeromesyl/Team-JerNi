import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  Platform,
  Animated,
  ScrollView,
} from "react-native";

import { CommonActions } from "@react-navigation/native";
import { BlurView } from "@react-native-community/blur";

import { data } from "../data/dummyData";
import Card from "../components/Card";

export default function RestaurantDetails({ route, navigation }) {
  const HEADER_HEIGHT = 350;
  const [headerDetails, setHeaderDetails] = useState([]);
  const [menu, setMenu] = useState([]);
  const offset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let { name, description, rating, image, menu } = route.params;
    let headerDetails = {
      name: name,
      description: description,
      rating: rating,
      image: image,
    };
    setHeaderDetails(headerDetails);
    setMenu(menu);
  }, []);

  function renderMenu({ item }) {
    return (
      <View style={styles.menu}>
        <Card key={item.id} itemData={item} />
      </View>
    );
  }

  function renderHeaderImg() {
    return (
      <View style={styles.headerImg}>
        <Animated.Image
          source={headerDetails.image}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: offset.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: offset.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
      </View>
    );
  }

  function renderInfo() {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{headerDetails.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Text style={{ marginHorizontal: 2 }}>
              Rating: {headerDetails.rating}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              padding: 20,
              backgroundColor: "white",
            }}
          >
            {headerDetails.description}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.FlatList
        data={menu}
        ListHeaderComponent={
          <View>
            {renderHeaderImg()}
            {renderInfo()}
            <View style={{ alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#FF5858",
                  height: 35,
                  width: "75%",
                  borderRadius: 25,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => navigation.navigate("Maps")}
              >
                <Text style={{ color: "white", fontWeight: "bold" }}>
                  Show on map
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: true }
        )}
        renderItem={renderMenu}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  menu: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  headerImg: {
    alignItems: "center",
    overflow: "hidden",
    marginTop: -1000,
    paddingTop: 1000,
  },
  headerInfo: {
    height: 130,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
    overflow: "scroll",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1.5,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});
