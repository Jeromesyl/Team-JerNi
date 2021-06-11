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
  const [headerDetails, setHeaderDetails] = useState([]);
  const [menu, setMenu] = useState([]);
  const offset = useRef(new Animated.Value(0)).current;
  const HEADER_HEIGHT = 350;

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
      <View
        style={{
          alignItems: "center",
          overflow: "hidden",
          marginTop: -1000,
          paddingTop: 1000,
        }}
      >
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
          flexDirection: "row",
          height: 130,
          paddingHorizontal: 30,
          paddingVertical: 20,
          alignItems: "center",
          overflow: "scroll",
        }}
      >
        <View
          style={{
            flex: 1.5,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {headerDetails.name}
          </Text>
          <Text style={{ fontSize: 16, textAlign: "justify" }}>
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
  title: {
    fontSize: 20,
  },
});
