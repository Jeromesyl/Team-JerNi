import * as React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function Maps({ route, navigation }) {
  const { location } = route.params;
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: location.latitude,
          longitude: location.longtitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.0121,
        }}
      >
        <Marker
          style={{
            height: 50,
            width: 50,
          }}
          coordinate={{
            latitude: location.latitude,
            longitude: location.longtitude,
          }}
          image={require("../assets/map-marker.png")}
          title="test"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: "75%",
  },
});
